import LogoImg from "../../assets/Logo.svg";
import s from "./LogoStyles";

function Logo() {
  return (
    <s.MainContainer>
        <img src={LogoImg}/> 
        <s.LogoText>Steps for Future</s.LogoText>
    </s.MainContainer>
  );
}

export default Logo;