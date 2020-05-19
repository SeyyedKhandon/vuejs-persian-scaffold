// import { getItem, postItem } from "@/api/api_helper/base_apis/base_api";
// import { OAuthProvider, OAuthToken, RegularLoginType } from "@/types/api";
// import { getEndPoints, origin } from "@/api/api_helper/EndPointHelper";
// import queryString from "query-string";
// import { rawPostService } from "@/api/api_helper/base_apis/raw_api";
//
// export const api_fetchOauthProviders = async () => {
//   let oauth_providers = ((await getItem(
//     getEndPoints().hostUri + "oauth-provider"
//   )) as unknown) as OAuthProvider[];
//   return oauth_providers;
// };
// export const api_fetchToken = async (
//   access_token_url: string,
//   authentication_info: string
// ) => {
//   let token: OAuthToken = await rawPostService(
//     access_token_url,
//     authentication_info
//   );
//   return token;
// };
//
// const api_login_byUsernameAndPassword = async (login: RegularLoginType) => {
//   const uri =
//     origin() +
//     getEndPoints().login;
//   const login_token: OAuthToken = await postItem(
//     uri,
//     queryString.stringify({
//       username: login.username,
//       password: login.password,
//       grant_type: "password",
//       scope: "any"
//     })
//   );
//   return login_token;
// };
// export { api_login_byUsernameAndPassword };
