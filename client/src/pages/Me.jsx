import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Me = () => {
    const auth = useAuth();
    const user = auth.user;

    return (
        <div>
            <Link className="btn btn-primary m-2 absolute top-0" to="/">
                Dashboard
            </Link>
            {/* // Style this */}
            <div className="flex justify-center">{user.name}</div>
        </div>
    );
};

export default Me;
