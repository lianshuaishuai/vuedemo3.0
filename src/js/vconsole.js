import VConsole from "vconsole";
export default (process.env.VUE_APP_FLAG !== "production") ? new VConsole : ""
