import { useAuth } from "../hooks/useAuth";

const Callback = () => {
    const auth = useAuth();
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get("code");

    auth.getUser(code);
};

export default Callback;
