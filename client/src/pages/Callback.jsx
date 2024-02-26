import { useAuth } from "../hooks/useAuth";

const Callback = () => {
    const auth = useAuth();
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get("code");

    auth.getUser(code);

    return (
        <div className="flex justify-center items-center h-[80vh]">
            <span className="loading loading-dots w-20 -translate-y-12"></span>
        </div>
    );
};

export default Callback;
