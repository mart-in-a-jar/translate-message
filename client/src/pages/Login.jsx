import vippButtonImage from "../assets/log_in_with_vipps_pill_250_NO@2x.png";
import { useAuth } from "../hooks/useAuth";

const isDev = import.meta.env.DEV;

const baseUrl = isDev ? "https://apitest.vipps.no" : "https://api.vipps.no";
const clientId = isDev
    ? "5a9d5335-b8af-40b0-b8fd-a477efa216ca"
    : "aa31125a-323d-4ccd-999b-359347929d30";

const redirectUri = isDev
    ? "http://localhost:5173/callback"
    : "https://demo.ssnit.no/callback";

const Login = () => {
    const url = `${baseUrl}/access-management-1.0/access/oauth2/auth?client_id=${clientId}&response_type=code&scope=openid%20name%20phoneNumber%20address%20birthDate%20email&state=8652682f-ba1d-4719-b1ec-8694ba97bde7&redirect_uri=${redirectUri}`;
    const auth = useAuth();

    return (
        <div className="flex flex-col items-center justify-center gap-3 h-[80vh]">
            <div className="max-w-sm mx-2">
                <a href={url}>
                    <img src={vippButtonImage} alt="Log inn with vipps" />
                </a>
            </div>
            <div className="h-8">
                {auth.displayErrorMessage && (
                    <div className="text-error">Something went wrong</div>
                )}
            </div>
        </div>
    );
};

export default Login;
