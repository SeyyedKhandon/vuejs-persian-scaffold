// import store from '@/store/'
export enum RoleAccessLevel {
  God = 0,
  SuperAdmin = 1,
  Admin = 2,
  User = 10
}
// export default function checkRoles(to, from, next) {
//   const { state } = store
//   const { requiresRole } = to.meta
//
//   if (!requiresRole) {
//     next()
//   } else {
//     if (!state.user.id) {
//       next('/login')
//     } else {
//       const { roles = [] } = state.user
//       if (roles.indexOf(requiresRole) > -1) {
//         next()
//       } else {
//         next('/403')
//       }
//     }
//   }
// }
