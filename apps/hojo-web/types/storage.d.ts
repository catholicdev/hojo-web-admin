interface IStorageUser {
  status: string;
  accessToken: string;
  loginTimeStamp?: number;
}

interface IStorageGuest {
  userId: string;
  appId: string;
}
