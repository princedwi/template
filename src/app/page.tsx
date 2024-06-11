"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Header from "@/components/header";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { user } = useSelector((state: any) => state.user);
  useEffect(() => {
    if (!user.isLogin) {
      router.push("/login");
    } else {
      router.push("/dashboard");
    }
  });

  return (
    <div className="container-fluid">
      <div className="card">
        <div className="card-body">LOading....</div>
      </div>
    </div>
  );
}
