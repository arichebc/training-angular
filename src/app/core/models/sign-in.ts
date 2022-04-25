import { SignInI } from '../interfaces/sign-in-i';

export class SignIn implements SignInI {
  email = '';
  password = '';
  constructor(obj?: Partial<SignIn>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
