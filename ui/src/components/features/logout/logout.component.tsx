import useAccessToken from "../../../hooks/useAccessToken.hook";
import useRefreshToken from "../../../hooks/useRefreshToken";
import ButtonLink from "../../core/button-link/button-link.component";

const Logout = () => {
    const { deleteAccessToken } = useAccessToken();
    const { deleteRefreshToken } = useRefreshToken();
    
    const handleOnClick = async () => {
        deleteRefreshToken();
        deleteAccessToken();
        window.location.reload();

    };

    return <ButtonLink value="Logout" onClick={handleOnClick}/>
};

export default Logout;