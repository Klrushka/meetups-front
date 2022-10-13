import crypto from 'crypto';
import { ILoginCredentials } from '@interfaces';

export const loginUser = async (credentials: ILoginCredentials) => {
  return {
    status: 200,
    json: async () => {
      return {token: crypto.randomBytes(233).toString()}
    }
  }
}

