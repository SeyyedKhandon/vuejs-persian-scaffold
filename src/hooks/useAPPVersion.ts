export const AppVersion = {
  packageVersion: process.env.PACKAGE_VERSION || 0,
  packageName: process.env.PACKAGE_NAME || 0,
  packageBuildVersion: process.env.PACKAGE_BUILD_VERSION || 0,
  packageDevVersion: process.env.PACKAGE_DEV_VERSION || 0
};
export const useAppVersionInfo = () => {
  const beautifulLog = (text: string) =>
    console.log(
      `%c ${text} %c`,
      "background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff",
      "background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff",
      "background:transparent"
    );
  const showVersion = () => {
    beautifulLog(
      `APP '${AppVersion.packageName}' %c v${AppVersion.packageVersion}`
    );
    beautifulLog(`Build %c v${AppVersion.packageBuildVersion}`);
    beautifulLog(`Dev %c v${AppVersion.packageDevVersion}`);
    console.log(`%c ${" ".repeat(5)} '`, `background: #cccccc8a;`);
  };
  return { beautifulLog, showVersion, AppVersion };
};
