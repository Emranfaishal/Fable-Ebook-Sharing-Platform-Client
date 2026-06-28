// import { serverFetch } from "../core/server";

// export const getAllUsers = async () => {
//   return await serverFetch("/api/users");
// };
import { serverFetch } from "../core/server";

export const getAllUsers = async () => {
  const data = await serverFetch("/api/users");

  return Array.isArray(data) ? data : [];
};