"use client";
import Header from "@/components/header";
import { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

export default function Template({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const { user } = useSelector((state: any) => state.user);
  console.log(user, "SDdsd");
  return path.includes("/login") ? (
    <div>{children}</div>
  ) : (
    <div>
      {user.islogin && <Header />}

      {children}
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
