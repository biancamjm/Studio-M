import { useContext } from "react";
import { MainStyle, StyledLogoMain } from "./style";
import BgHome from "../../assets/bghome.png";
import LogoBgHome from "../../assets/logoHome.png";

const Main = () => {

    return (
        <MainStyle>
                <img src={BgHome} alt=""/>
            <StyledLogoMain>
                <img src={LogoBgHome} alt="" />
            </StyledLogoMain>
            <p>Seu bem estar e autoestima em um só lugar!</p>
        </MainStyle>
    )

}

export default Main;