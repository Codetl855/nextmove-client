import { NavigateFunction } from "react-router-dom";

export function redirectTimeout(
  navigate: NavigateFunction,
  path: string,
  delay: number = 3000
) {
  setTimeout(() => {
    navigate(path);
  }, delay);
}


export const getDefaultAvatar = (
  name: string,
  bg: string = "gold",
  color: string = "fff"
): string => {
  return `https://ui-avatars.com/api/?background=${bg}&color=${color}&name=${encodeURIComponent(
    name
  )}`;
};

