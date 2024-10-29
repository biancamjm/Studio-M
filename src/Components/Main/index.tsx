import { useContext } from "react";
import { MainStyle, StyledLogoMain } from "./style";
import BgHome from "../../assets/bghome.png";
import LogoBgHome from "../../assets/logoHome.png";

const Main = () => {

    return (
        <MainStyle>
            <StyledLogoMain>
                <img src={BgHome} alt=""/>
                <img src={LogoBgHome} alt="" />
            </StyledLogoMain>
        </MainStyle>
    )

}

export default Main;