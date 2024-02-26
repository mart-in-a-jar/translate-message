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
            <div className="dropdown dropdown-end m-2">
                <div tabIndex={1} role="button">
                    <Avatar />
                </div>
                <ul className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-32">
                    <li>
                        <Link
                            className="py-4"
                            to="/me"
                            onClick={() => {
                                const element = document.activeElement;
                                if (element) {
                                    element.blur();
                                }
                            }}
                        >
                            Profil
                        </Link>
                    </li>
                    <li>
                        <Link className="py-4" onClick={auth.logout}>
                            Logg ut
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
