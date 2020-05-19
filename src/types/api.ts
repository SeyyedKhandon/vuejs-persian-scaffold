// api types
export interface Pagination {
  page: number;
  size: number;
  total?: number;
}
export interface RegularLoginType {
  username: string;
  password: string;
}
export interface EndPoints {
  apiServer: string;
  testApiServer: string;
  oAuthServer: string;
  cdnServer: string;
  origin: string;
  hostUri: string;
  redirectUri?: string;
  login: string;
  authorizePath: string;
  authenticationPath: string;
  signOutPath: string;
  scope: string;
}
export interface OAuthToken {
  token_type: string;
  expires_in: number;
  access_token: string;
  refresh_token: string;
  scope: string;
  jti: string;
  id_token?: string;
  resource?: string;
  refresh_token_expires_in?: number;
}
export interface OAuthProvider {
  accessTokenURL: string | any;
  active: boolean;
  authURL: string;
  clientId: string;
  clientSecret: string;
  grantType:
    | {
        id: number;
        desc: string;
        _options: object[];
      }
    | number;
  keySetURL: string;
  logoURL: string;
  name: string;
  resource: string;
}
