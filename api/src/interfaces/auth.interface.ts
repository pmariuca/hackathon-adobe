export interface RequestWithUser extends Request {
  user?: UserInfo;
}

export interface UserInfo {
  id: string;
}
