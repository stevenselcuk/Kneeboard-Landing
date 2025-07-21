export const IS_PROD = window.location.hostname !== "localhost";
export const REST_API = IS_PROD
  ? "https://api.cockpitcheck.com/"
  : "http://localhost:4300/";
export const SOCKET_URI = IS_PROD
  ? "https://api.cockpitcheck.com"
  : "http://localhost:4300";
export const TEXT = {
  appName: "CockpitCheck",
};
