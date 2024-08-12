"use client";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Login from "@/components/login";
import Loader from "@/components/Loader";
import React from "react";
import Alert from '@mui/material/Alert';
import { LoaderProps } from "@/types/loader.types";
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
interface State extends SnackbarOrigin {
  open: boolean;
  data: string;
}
export default function LoginPage() {
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
    data:""
  });
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const router = useRouter();
  const { user } = useSelector((state: any) => state.user);
  if (user.isLogin) {
    router.push("/dashboard");
  }
  const [LoaderData, setLoaderData] = React.useState<LoaderProps>({ data: "", display: false, type: 1 });
  const setloaderdata = () => {
    setLoaderData({ data: "", display: false, type: 1 })
  }
  return (
    <div className="login">
      <Snackbar open={open} anchorOrigin={{ vertical, horizontal }} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
          className="z-[999999999]"
        >
          {"Please Enter All the credentials Correctly"}
        </Alert>
      </Snackbar>
      <Login setState={setState} />
    </div>
  );
}
