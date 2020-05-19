import { i18n } from "./useLocale";
import Swal, { SweetAlertIcon } from "sweetalert2";

export const notSavedChangesAlert = (message = "") => {
  return Swal.fire({
    title: i18n.t("toastMessages.notSavedChanges.title") as string,
    text: message || (i18n.t("toastMessages.notSavedChanges.text") as string),
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: i18n.t(
      "toastMessages.notSavedChanges.confirm"
    ) as string,
    cancelButtonText: i18n.t("toastMessages.notSavedChanges.cancel") as string,
    confirmButtonColor: "#d33",
    focusConfirm: true
  } as any);
};
export const deleteRequestAlert = (title: string, item_label: string) => {
  return Swal.fire({
    title: i18n.t("toastMessages.deleteRequest.title", {
      msg: title
    }) as string,
    text: i18n.t("toastMessages.deleteRequest.text", {
      title,
      item_label
    }) as string,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: i18n.t("toastMessages.deleteRequest.confirm") as string,
    cancelButtonText: i18n.t("toastMessages.deleteRequest.cancel") as string,
    confirmButtonColor: "#d33",
    focusConfirm: true
  });
};
export const deleteResponseAlert = (
  title: string = i18n.t("toastMessages.deleteResponse.title") as string,
  text: string,
  icon: SweetAlertIcon,
  timer: number
) => {
  return Swal.fire({
    title,
    text,
    icon,
    timer,
    confirmButtonText: i18n.t("toastMessages.deleteResponse.confirm") as string
  });
};

export const useAlerts = () => ({
  notSavedChangesAlert,
  deleteRequestAlert,
  deleteResponseAlert
});
