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


const CampaignContainer = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    align-items: center;
    justify-content: center;
`


const OtherCampaignsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;

`

const OtherCampaign = styled.div`
    display: flex;
    font-size: large;
    width: 400px;
    font-weight: 700;
    justify-content: center;
    align-items: center;
    color: ${Colors.DARKBLUE};
    border-radius: 20px;
    height: 200px;
    background-color: ${Colors.LIGHTGRAY};

`

const CampaignsStyles = {
    MainContainer,
    CenterContainer,
    CampaignContainer,
    OtherCampaignsContainer,
    OtherCampaign
}


export default CampaignsStyles;