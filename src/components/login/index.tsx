"use client";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../../types/user.types";
import { cron } from "@/utilities/axios";
import { useRouter } from "next/navigation";
import { updateUser } from "@/redux/features/userSlice";
type User = {
  name: string;
};

export default function Login() {
  const state = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const router = useRouter();

  const { user } = state;
  const [formData, setFormData] = useState<login>({
    email: "",
    password: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    let u = { name: "prince", isAdmin: false, islogin: true };

    dispatch(updateUser({ ...u }));
    router.push("/dashboard");
  };

  return (
    <div className=" col-md-5 mx-auto ">
      <div className={"card card-body "}>
        <form>
          <div className="form-group required">
            <p>{user.name}</p>
            <label htmlFor="username">Username / Email</label>
            <input
              type="text"
              className={" form-control text-lowercase"}
              name="email"
              value={formData.email}
              onChange={handleInput}
            />
          </div>
          <div className="form-group required">
            <label
              className="d-flex flex-row align-items-center"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleInput}
            />
          </div>
          <div className="form-group mt-4 mb-4">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="remember-me"
                name="remember-me"
                data-parsley-multiple="remember-me"
              />
              <label className="custom-control-label" htmlFor="remember-me">
                Remember me?
              </label>
            </div>
          </div>
          <div className="form-group pt-1">
            <button className="btn btn-primary btn-block" onClick={handleLogin}>
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
