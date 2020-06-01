import { CustomRouteConfig } from "@/types/router";
import { errorRoutes } from "./modules/errors";
import { frameOut } from "./modules/frameOut";
import { frameIn } from "./modules/frameIn";
const routes = (): Array<CustomRouteConfig> => [
  ...frameOut(),
  ...frameIn(),
  ...errorRoutes
];

export { routes };
