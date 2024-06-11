"use client";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Login from "@/components/login";

export default function LoginPage() {
  const router = useRouter();
  const { user } = useSelector((state: any) => state.user);
  if (user.isLogin) {
    router.push("/dashboard");
  }
  return (
    <div className="login">
      <Login />
    </div>
  );
}
