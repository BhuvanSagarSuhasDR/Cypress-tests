export const requestData = {
  getPricelabsLoginBody: (email, password) => ({
    "user[email]": email,
    "user[password]": password,
    "user[remember_me]": "0",
    commit: "Sign in",
  }),
};
