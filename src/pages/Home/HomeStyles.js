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

`

const PointsAndDistanceContainer = styled.div`
    display: flex;
    height: 15%;
    width: 50%;
    margin-top: 20px;
    align-items: center;
    justify-content: space-evenly;

`

const DistanceContainer = styled.div`
    display: flex;
    background-color: ${Colors.DARKBLUE};
    color: ${Colors.WHITE};
    height: 80%;
    width: 20%;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const PointsContainer = styled.div`
    display: flex;
    background-color: ${Colors.PRIMARY};
    color: ${Colors.WHITE};
    height: 80%;
    width: 20%;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`


const CampaignContainer = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    align-items: center;
    justify-content: center;
`


const RankingContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40%;
`


const Title = styled.h1`
    width: 100%;
    text-align: center;
    color: ${Colors.DARKBLUE};
    margin-bottom: 20px;
`

const Position = styled.h2`
    width: 100%;
    text-align: center;
    color: ${Colors.BLACK};
`



const HomeStyles = {
    MainContainer,
    Title,
    CenterContainer,
    PointsAndDistanceContainer,
    DistanceContainer,
    PointsContainer,
    CampaignContainer,
    RankingContainer,
    Position
   
}


export default HomeStyles;