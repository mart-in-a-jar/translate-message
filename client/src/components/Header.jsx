import { useAuth } from "../hooks/useAuth";

const Header = () => {
    const auth = useAuth();

    if (!auth.user) {
        return null;
    }

    return (
        <header className="absolute top-2 right-2">
            <button className="btn btn-outline" onClick={auth.logout}>
                Log out
            </button>
        </header>
    );
};

export default Header;
