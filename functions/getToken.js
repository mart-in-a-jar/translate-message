import "dotenv/config";
import { vippsSystemHeaders } from "../const.js";

const clientId = process.env.CLIENT_ID_VIPPS;
const clientSecret = process.env.CLIENT_SECRET_VIPPS;
const msn = process.env.MSN_VIPPS;
const redirectUri = process.env.REDIRECT_URI_VIPPS;
const url = process.env.API_URL_VIPPS + "/access-management-1.0/access/oauth2/token";

const getToken = async (code) => {
    const headers = {
        "Merchant-Serial-Number": msn,
        ...vippsSystemHeaders,
    };

    const formData = new URLSearchParams();
    const formTemplate = {
        grant_type: "authorization_code",
        code,
        redirect_uri: redirectUri,
        client_id: clientId,
        client_secret: clientSecret,
    };

    for (const [key, value] of Object.entries(formTemplate)) {
        formData.append(key, value);
    }

    const res = await fetch(url, { method: "POST", headers, body: formData });
    const data = await res.json();

    return data.access_token;
};

export { getToken };
