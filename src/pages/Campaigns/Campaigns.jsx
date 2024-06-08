import s from "./CampaignsStyles";
import CampaignImage from "../../assets/CampaignImage.svg"
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header"


function Campaigns() {
  return (
    <s.MainContainer>
        <Header/>
        
        <s.CenterContainer>

          <s.CampaignContainer>
            <img src={CampaignImage}/>
          </s.CampaignContainer>


          <s.OtherCampaignsContainer>
            <s.OtherCampaign>
              Plantio de Árvore
            </s.OtherCampaign>

            <s.OtherCampaign>
              Doe seus Pontos
            </s.OtherCampaign>


            <s.OtherCampaign>
              Campanha de Reciclagem
            </s.OtherCampaign>

          </s.OtherCampaignsContainer>

        </s.CenterContainer>

    </s.MainContainer>
  );
}

export default Campaigns;
