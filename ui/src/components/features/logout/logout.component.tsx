import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth.hook";
import ButtonLink from "../../core/button-link/button-link.component";

const Logout = () => {
    const {
        deleteAccessToken,
        revokeToken
    } = useAuth();
    const navigate = useNavigate();

    const handleOnClick = () => {
        deleteAccessToken();
        revokeToken();
        navigate('/login', { replace: true });
    };

    return <ButtonLink value="Logout" onClick={handleOnClick}/>
};

export default Logout;