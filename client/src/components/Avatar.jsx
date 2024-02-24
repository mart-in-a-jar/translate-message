import { useAuth } from "../hooks/useAuth";

const Avatar = () => {
    const auth = useAuth();
    const user = auth.user;

    const initials = user.given_name.slice(0, 1) + user.family_name.slice(0, 1);

    return (
        <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-12">
                <span className="uppercase">{initials}</span>
            </div>
        </div>
    );
};

export default Avatar;
