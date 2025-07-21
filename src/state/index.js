import { atom } from "recoil";
const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    try {
      const savedValue = localStorage.getItem(key);
      if (savedValue !== null) {
        const parsed = JSON.parse(savedValue);
        if (parsed !== undefined) {
          setSelf(parsed);
        }
      }
    } catch (error) {
      console.warn(`localStorageEffect error (read):`, error);
      // localStorage bozuksa temizle
      localStorage.removeItem(key);
    }

    onSet((newValue, _, isReset) => {
      try {
        if (isReset) {
          localStorage.removeItem(key);
        } else {
          localStorage.setItem(key, JSON.stringify(newValue));
        }
      } catch (error) {
        console.warn(`localStorageEffect error (write):`, error);
      }
    });
  };

export const appConfig = atom({
  key: "appConfig",
  default: [],
  effects: [localStorageEffect("appConfig")],
});
