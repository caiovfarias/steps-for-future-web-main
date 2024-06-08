import styled from "styled-components";
import { Colors } from "../../../theme/DesignTokens";
import { Button } from "../../../components/Button/Button";

const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    flex-direction: column;
`

const Header = styled.div `
    height: 10xw;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 30px;
    background-color: ${Colors.PRIMARY};
`

const ButtonsContainer = styled.div`
    display: flex;
    height: auto;
    width: 200px;
    justify-content: space-between;

`

const CenterContainer = styled.div`
    display: flex;
    background-color: ${Colors.WHITE};
    height: 80%;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;

`


const PlanContainer = styled.div`
    display: flex;
    width: 30%;
    max-width: 500px;
    height: 80%;
    border: solid 2px ${Colors.MEDIUMGRAY};
    border-radius: 15px;
    flex-direction: column;
    justify-content: space-around;

`
const PlanHeader = styled.div`
    display: flex;
    height: 20%;
    border-bottom: solid 2px ${Colors.MEDIUMGRAY};
    margin-bottom: 30px;
    justify-content: center;
    align-items: center;
`

const PlanHeaderTitle = styled.h1`
    color: ${(props) => props.variant  === "secondary" ?  Colors.PRIMARY : Colors.SECONDARY};
`

const PlanButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const PlanDescriptionRow = styled.div`
    display:flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    
`

const PlanDescriptionRowText = styled.span`
    color: ${Colors.DARKBLUE};
    margin-left: 20px;
`

const PlanPriceText = styled.span`
    color: ${Colors.GREEN};
    font-weight: 700;
`


const ButtonContainer = styled.div `
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Plans = {
    MainContainer,
    Header,
    ButtonsContainer,
    CenterContainer,
    PlanContainer,
    PlanHeader,
    PlanHeaderTitle,
    PlanButtonContainer,
    PlanDescriptionRow,
    PlanDescriptionRowText,
    PlanPriceText,
    ButtonContainer
}


export default Plans