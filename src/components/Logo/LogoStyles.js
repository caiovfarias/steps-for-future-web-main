import styled from "styled-components";
import { Colors} from '../../theme/DesignTokens';

const MainContainer = styled.div `
    height: auto;
    width: auto;
    display: flex;
    align-items:center;
    justify-content: center;
`
const LogoText = styled.h2`
    color: ${Colors.WHITE};
`

const Logo1Styles = {
    MainContainer,
    LogoText
}

export default Logo1Styles;