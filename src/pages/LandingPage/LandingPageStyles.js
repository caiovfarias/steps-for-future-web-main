import styled from "styled-components"
import { Colors } from '../../theme/DesignTokens'

const MainContainer = styled.div `
    height: 270vh;
    width: 100%;
    display: flex;
    flex-direction: column;
`
const TopContainer = styled.div`
    display: flex;
    background-color: ${Colors.PRIMARY};
    height: 100vh;
    width: 100%;
    flex-direction: column;
`

const Header = styled.div `
    height: 10xw;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 30px;
    position: fixed;
    background-color: ${Colors.PRIMARY};
`

const ButtonsContainer = styled.div`
    display: flex;
    height: auto;
    width: 200px;
    justify-content: space-between;

`
const Title = styled.h1`
    margin-top: 150px;
    color: ${Colors.WHITE};
    width: 100%;
    height: 200px;
    text-align: center;
`


const TopSubtitleContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    padding: 0 400px;
    justify-content: space-around;
    align-items: center;
    
`

const Subtitle = styled.h2`
    color: ${Colors.WHITE};
    text-align: center;
    width: 40%;
`


const CenterContainer = styled.div`
    display: flex;
    background-color: ${Colors.WHITE};
    height: 70vh;
    width: 100%;
    align-items: center;
    justify-content: space-evenly

`

const PlanContainer = styled.div`
    display: flex;
    width: 30%;
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

const BottomCotainer = styled.div`
    display: flex;
    background-color: ${Colors.SECONDARY};
    height: 100vh;
    width: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

const BottomSubtitleContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const BottomButtonsContainer= styled.div`
    display: flex;
    height: 200px;
    width: 40%;
    justify-content: space-evenly;

`

const LandingPageStyles = {
    MainContainer,
    TopContainer,
    Header,
    TopSubtitleContainer,
    Subtitle,
    ButtonsContainer,
    Title,
    CenterContainer,
    PlanContainer,
    PlanHeader,
    PlanHeaderTitle,
    PlanDescriptionRow,
    PlanDescriptionRowText,
    PlanButtonContainer,
    BottomCotainer,
    BottomSubtitleContainer,
    BottomButtonsContainer
}


export default LandingPageStyles;