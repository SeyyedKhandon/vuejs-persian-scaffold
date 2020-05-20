import { getItem } from "@/api/api_helper/base_apis/base_api";
import { GithubUser } from "@/types/github_users";

export const api_github_fetchUsers = () =>
  getItem("https://api.github.com/users");

export const api_github_contributors = () =>
  getItem("/repos/SeyyedKhandon/simple-browser-fingerprint/stats/contributors");
