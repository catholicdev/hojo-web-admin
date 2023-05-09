import { STORAGE_KEYS } from "@web/configs";

export const isBrowser = () => {
  return typeof window !== "undefined";
};

class Storage {
  private _user: IStorageUser;
  private _rememberMe: boolean;
  private _newToken: string;
  private _guest: IStorageGuest;

  constructor() {
    const persistedUser = this.decode();
    const persistedGuest = this.decodeGuest();

    try {
      this._user = JSON.parse(persistedUser);
      this._guest = JSON.parse(persistedGuest);
    } catch (e) {
      this._user = null;
    } finally {
      this._rememberMe = JSON.parse(localStorage.getItem(STORAGE_KEYS.REMEMBER_ME)) || true;
    }
  }

  static reverse(str: string) {
    return str.split("").reverse().join("");
  }

  private decode() {
    return window.atob(Storage.reverse(localStorage.getItem(STORAGE_KEYS.USER_DATA) ?? ""));
  }

  private decodeGuest() {
    return window.atob(Storage.reverse(localStorage.getItem(STORAGE_KEYS.GUEST_DATA) ?? ""));
  }

  private encode() {
    return Storage.reverse(window.btoa(JSON.stringify(this._user)));
  }

  private guestEncode() {
    return Storage.reverse(window.btoa(JSON.stringify(this._guest)));
  }

  get rememberMe() {
    return this._rememberMe;
  }

  set rememberMe(value) {
    this._rememberMe = value;
    localStorage.setItem(STORAGE_KEYS.REMEMBER_ME, JSON.stringify(value));
  }

  persist(value: Partial<IStorageUser>) {
    this._user = { ...this._user, ...value };

    localStorage.setItem(STORAGE_KEYS.USER_DATA, this.encode());
  }

  persistGuest(value: Partial<IStorageGuest>) {
    this._guest = { ...this._guest, ...value };

    localStorage.setItem(STORAGE_KEYS.GUEST_DATA, this.guestEncode());
  }

  purge() {
    this._user = null;
    localStorage.removeItem(STORAGE_KEYS.USER_DATA);
  }

  get accessToken() {
    if (this._user == null) return undefined;

    return this._user.accessToken;
  }

  get userStatus() {
    if (this._user == null) return undefined;

    return this._user.status;
  }

  get loginTimeStamp() {
    if (this._user == null) return undefined;

    return this._user.loginTimeStamp;
  }

  set loginTimeStamp(value) {
    this._user.loginTimeStamp = value;
    this.persist(this._user);
  }

  get guestId() {
    if (this._guest == null) return undefined;
    return this._guest.userId;
  }

  get guestAppId() {
    if (this._guest == null) return undefined;
    return this._guest.appId;
  }

  // get actionConfirmation() {
  //   if (this._user == null) return undefined;

  //   return this._user.actionConfirmation;
  // }
}

const mutateStorage = isBrowser() ? new Storage() : null;

if (isBrowser() && window.location.host.includes("localhost")) {
  window.mutateStorage = mutateStorage;
}

export default mutateStorage;
