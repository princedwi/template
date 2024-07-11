import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import StoreProvider from "@/storeProvider";

import {NextUIProvider} from "@nextui-org/react";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Webapp",
  description: "webapp by jacobs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      // <NextUIProvider>
    <html lang="en">
        <StoreProvider>
          <body className={""}>{children}</body>

        </StoreProvider>
      </html>
          // {/* </NextUIProvider> */}
  );
}
