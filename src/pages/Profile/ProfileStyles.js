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

const ProfileContainer = styled.div`
    display: flex;
    height: 30%;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.DARKBLUE};
`

const InfosContainer = styled.div`
    display: flex;
    color: ${Colors.WHITE};
    height: 100%;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    margin-left: 20px;

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


const Title = styled.h1`
    width: 100%;
    text-align: center;
    color: ${Colors.DARKBLUE};
    margin-top: 30px;
`

const AchievementsContainer = styled.div`
    width: 60%;
    height: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`


const HomeStyles = {
    MainContainer,
    Title,
    CenterContainer,
    PointsAndDistanceContainer,
    DistanceContainer,
    PointsContainer,
    ProfileContainer,
    InfosContainer,
    AchievementsContainer,
   
}


export default HomeStyles;