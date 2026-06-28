// import { serverFetch } from "../core/server";

// export const getWritersPayment = async () => {
//     return await serverFetch("/api/writers/fee");
// }
import { serverFetch } from "../core/server";

export const getWritersPayment = async () => {
    const data = await serverFetch("/api/writers/fee");

    return Array.isArray(data) ? data : [];
};