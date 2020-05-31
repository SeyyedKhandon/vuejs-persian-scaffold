import VueRouter, { RawLocation } from "vue-router";
import * as R from "ramda";
import { Route } from "vue-router/types/router";
// prevent NavigationDuplicated Error
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location: RawLocation) {
  return ((originalPush.call(this, location) as unknown) as Promise<
    Route
  >).catch(R.identity);
};
export default VueRouter;
