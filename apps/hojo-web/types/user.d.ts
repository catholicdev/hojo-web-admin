interface IFormSignIn {
  email: string;
  password: string;
  remember?: boolean;
}

interface IActionConfirmation {
  isValid: boolean;
  errors: [];
  status: string;
  action?: string;
  via?: string;
  actorId?: string;
  createdBy?: string;
  updatedBy?: string;
  token?: string;
  expiredAt?: string;
  createdOn?: string;
  updatedOn?: string;
  id: number;
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
