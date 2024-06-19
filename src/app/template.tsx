"use client";
import Navbar from "@/components/Navbar";
import Header from "@/components/header";
import { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const router = useRouter();
  const { user } = useSelector((state: any) => state.user);
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
        <div className="row">
          <div className="col-2">
            <Navbar />
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-12">
                <Header />
              </div>
              <div className="col-12">{children}</div>
            </div>
          </div>
        </div>
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
