import { getToken } from "../functions/getToken.js";
import { getUserInfo } from "../functions/getUserInfo.js";

const getUser = async (req, res) => {
    const code = req.body.code;
    try {
        const token = await getToken(code);
        const user = await getUserInfo(token);

        res.json(user);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};

export { getUser };
