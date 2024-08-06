"use client";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { loginAPI } from "../../types/user.types";
import { cron } from "@/utilities/axios";
import { useRouter } from "next/navigation";
import { updateUser } from "@/redux/features/userSlice";
import { login } from "@/utilities/axios/login";
type User = {
  name: string;
};

export default function Login() {
  const state = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const router = useRouter();

  const { user } = state;
  const [formData, setFormData] = useState<loginAPI>({
    identifier: "",
    password: "",
  });

  useEffect(()=>{
    var LoginUser = localStorage.getItem("user");
    if(LoginUser != undefined){
      console.log(JSON.parse(LoginUser));
      let u = { name: user.username, isAdmin: false, islogin: true };
      dispatch(updateUser({ ...u }));
      router.push("/dashboard");
    }
   
  },[])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    
    login(formData).then((result:any) =>{
      console.log(result);
      localStorage.setItem('user', JSON.stringify(result.user));
      localStorage.setItem('token', result.jwt);
      let u = { name: result.user.username, isAdmin: false, islogin: true };
      dispatch(updateUser({ ...u }));
      router.push("/dashboard");
    }

    ).catch(error => alert(error.message))
    
    
  };

  return (
    <>
    <div className="login-main">
      <div className="login-img"></div>

      <div className=" col-md-5 mx-auto my-auto  " style={{ height: "100vh", paddingTop: '12vh' }}>
        <div className={"card card-body login-box login-main-sub"} >
          <div className="login-profile-pic mt-2" >
            <img src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Free-Download.png" className=""/>
          </div>
        <div className="login-heading">
          <div className="">
            USER LOGIN
          </div>
        </div>
          <form className="p-2">
            <div className="form-group required">
              <div>{user.name}</div>
              <label htmlFor="username" className=" mb-2">Username / Email</label>
              <input
                type="text"
                className={" form-control text-lowercase login-input"}
                name="identifier"
                value={formData.identifier}
                onChange={handleInput}
                placeholder="Username / Email"
              />
            </div>
            <div className="form-group required mt-4">
              <label
                className="d-flex flex-row align-items-center mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control login-input"
                name="password"
                onChange={handleInput}
                placeholder="Password"
              />
            </div>
            <div className="form-group mt-4 mb-4">
              <div className="custom-control custom-checkbox login-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="remember-me"
                  name="remember-me"
                  data-parsley-multiple="remember-me"
                />
                <label className="custom-control-label mx-2" htmlFor="remember-me">
                  Remember me?
                </label>
              </div>
            </div>
            <div className="form-group pt-1 login-button">
              <button className="btn btn-primary btn-block " onClick={handleLogin}>
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    </>
  );
}
