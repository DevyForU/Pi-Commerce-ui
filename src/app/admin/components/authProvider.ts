import { AuthProvider, HttpError } from "react-admin";

/**
 * This authProvider is only for test purposes. Don't use it in production.
 */
export const authProvider: AuthProvider = {
  login: async ({ name, password }) => {

    const responses= await fetch('http://[::1]:3000/users')
    const users= await responses.json()
    let user = null; // Initialisation à null pour le cas où aucun utilisateur n'est trouvé

    users.forEach((u: { username: string; password: string; }) => {
      if (u.username === name && u.password === password) {
        user = u; // Assigner l'utilisateur trouvé à la variable user
      }
    });
    
    console.error(user,users)

    if (user) {
      // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
      let { password, ...userToPersist} = user;
      localStorage.setItem("user", JSON.stringify(userToPersist));
      return Promise.resolve();
    }

    return Promise.reject(
      new HttpError("Unauthorized", 401, {
        message: "Invalid username or password",
      })
    );
  },
  logout: () => {
    localStorage.removeItem("user");
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  checkAuth: () =>
    localStorage.getItem("user") ? Promise.resolve() : Promise.reject(),
  getPermissions: () => {
    return Promise.resolve(undefined);
  },
  getIdentity: () => {
    const persistedUser = localStorage.getItem("user");
    const user = persistedUser ? JSON.parse(persistedUser) : null;

    return Promise.resolve(user);
  },
};

export default authProvider;
