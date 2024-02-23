import vippButtonImage from "../assets/log_in_with_vipps_pill_250_NO@2x.png";

const isDev = import.meta.env.DEV;

const baseUrl = isDev ? "https://apitest.vipps.no" : "https://api.vipps.no";
const clientId = isDev
    ? "5a9d5335-b8af-40b0-b8fd-a477efa216ca"
    : "f652f621-e239-45e1-bb2b-4b7c3a1af5eb";

const redirectUri = isDev
    ? "http://localhost:5173/callback"
    : "https://demo.ssnit.no/callback";

const Login = () => {
    const url = `${baseUrl}/access-management-1.0/access/oauth2/auth?client_id=${clientId}&response_type=code&scope=openid%20name%20phoneNumber%20address%20birthDate&state=8652682f-ba1d-4719-b1ec-8694ba97bde7&redirect_uri=${redirectUri}`;

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="max-w-sm">
                <a href={url}>
                    <img src={vippButtonImage} alt="Log inn with vipps" />
                </a>
            </div>
        </div>
    );
};

export default Login;
