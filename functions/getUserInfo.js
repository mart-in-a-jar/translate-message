import "dotenv/config";
import { vippsSystemHeaders } from "../const.js";

const apiKey = process.env.API_KEY_VIPPS;
const msn = process.env.MSN_VIPPS;
const url = process.env.API_URL_VIPPS + "/vipps-userinfo-api/userinfo/";

const getUserInfo = async (token) => {
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "Ocp-Apim-Subscription-Key": apiKey,
        "Merchant-Serial-Number": msn,
        ...vippsSystemHeaders,
    };

    const res = await fetch(url, { headers });
    const data = await res.json();
    if (!res.ok) {
        console.error(data);
        throw new Error();
    }

    return data;
};

export { getUserInfo };
