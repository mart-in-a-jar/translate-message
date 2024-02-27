import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Me = () => {
    const auth = useAuth();
    const user = auth.user;

    return (
        <div>
            <Link
                className="btn btn-primary m-2 absolute top-0"
                to="/"
                tabIndex={0}
            >
                Dashboard
            </Link>
            <div className="user-info mt-4 flex justify-center">
                {user && (
                    <div className="mockup-code">
                        <pre data-prefix=">" className="text-primary">
                            <code>{user.name}</code>
                        </pre>
                        <pre data-prefix=">" className="text-accent">
                            <code>{user?.email}</code>
                        </pre>
                        <pre data-prefix=">" className="text-secondary">
                            <code>{user?.phone_number.slice(2)}</code>
                        </pre>
                        <pre data-prefix=">" className="text-warning">
                            <code className="whitespace-normal">
                                {user?.address?.formatted}
                            </code>
                        </pre>
                        <pre data-prefix=">" className="text-success">
                            {new Date(user.birthdate).toLocaleDateString(
                                "no-nb"
                            )}
                        </pre>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Me;
