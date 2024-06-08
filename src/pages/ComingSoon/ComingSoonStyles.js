import styled from "styled-components";
import { Colors } from "../../theme/DesignTokens";

const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    flex-direction: column;
`

const CenterContainer = styled.div`
    display: flex;
    height: 80%;
    width: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: center;

`

const Title = styled.h1`
    width: 100%;
    text-align: center;
    color: ${Colors.DARKBLUE};
    margin-bottom: 20px;
`

const ComingSoonStyles = {
    MainContainer,
    Title,
    CenterContainer
   
}


export default ComingSoonStyles;