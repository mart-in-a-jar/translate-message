import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Avatar from "./Avatar";

const Header = () => {
    const auth = useAuth();

    if (!auth.user) {
        return null;
    }

    return (
        <header className="flex justify-end mr-2">
            <div className="flex gap-2">
                <Link to="/me">
                    <Avatar />
                </Link>
                <button className="btn btn-outline" onClick={auth.logout}>
                    Log out
                </button>
            </div>
        </header>
    );
};

export default Header;
