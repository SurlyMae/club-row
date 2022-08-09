import fetcher from "./fetcher";

export const auth = (
  route: "signin" | "signup",
  body: { email: string; password: string }
) => {
  return fetcher(`/${route}`, body);
};
