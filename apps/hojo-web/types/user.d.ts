interface IFormSignIn {
  email: string;
  password: string;
  remember?: boolean;
}
interface IUser {
  kind: string;
  localId: string;
  email: string;
  displayName: string;
  idToken: string;
  registered: true;
  refreshToken: string;
  expiresIn: string;
  actionConfirmation: IActionConfirmation;
}

interface IGuest {
  token: string;
  appId: string;
  userId: string;
}
