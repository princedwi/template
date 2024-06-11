export interface login {
  email: string;
  password: string;
}

export interface CommonData {
  user: User;
}

export interface AlertData {
  alert: Alert;
}

export interface User {
  name: string;
  islogin: boolean;
  isAdmin: boolean;
}

export interface Alert {
  type: string;
  show: boolean;
  message: string;
}
