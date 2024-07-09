"use client";
import Navbar from "@/components/Navbar";
import Header from "@/components/header";
import { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import React from "react";
export default function Template({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const router = useRouter();
  const { user } = useSelector((state: any) => state.user);
  const [nav, setNav] = React.useState<Boolean>(false);
  useEffect(() => {
    if (!path.includes("/login") && !user.islogin) {
      router.push("/login");
    }
  });
  // console.log(user, "SDdsd");
  return path.includes("/login") ? (
    <div>{children}</div>
  ) : (
    <div>
      {user.islogin && (
        <>
          <Header changeNav={setNav} posNav={nav}/>
        <div className={nav?`row`:''}>
          <div className={ nav? " col-2 ":" col-1 "}>
            <Navbar changeNav={setNav} posNav={nav}/>
          </div>
          <div className={ nav? " col-10 ":" col-11 Header-template-main"}>
            <div className="row">
              <div className="col-12">
              </div>
              <div className="col-12">{children}</div>
            </div>
          </div>
        </div>
        </>
      )}

      {/* {children} */}
    </div>
  );

  // <div>
  //   {path.includes("/login") ? (
  //     { children }
  //   ) : (
  //     <>
  //       <Header />
  //       <p>jbjhjhjh</p>
  //     </>
  //   )}
  // </div>
}
// export default function Template({ Component, pageProps }: AppProps) {
//   const path = usePathname();
//   //   <div>{children}</div>
//   return (
//     <div>
//       {path.includes("/login") ? (
//         <Component {...pageProps} />
//       ) : (
//         <>
//           <Header />
//           <Component {...pageProps} />
//         </>
//       )}
//     </div>
//     // // <div>
//     // //   {/* {path.includes("/login") ? (
//     // //     { children }
//     // //   ) : (
//     // //     // <>
//     // //       {/* <Header /> */}
//     // //       {children}
//     // //     // </>
//     // //   )} */}
//     // // </div>
//   );
// }
