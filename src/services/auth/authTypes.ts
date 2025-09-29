export interface ILoginData{
    email: string;
    password: string;
}

export interface ILoginResponse{
    access_token: string;
    token_type: string;
}

export interface IUser{
  id: number;
  email: string;
  role: string;
  organization_id: number;
  created_at: string;
}