import s from "./HomeStyles";
import CampaignImage from "../../assets/CampaignImage.svg"
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header"


function Home() {
  return (
    <s.MainContainer>
        <Header/>
        
        <s.CenterContainer>

          <s.PointsAndDistanceContainer>

            <s.DistanceContainer><h1>78 km</h1> <span>percorridos</span></s.DistanceContainer>

            <s.PointsContainer><h1>8526</h1> <span>pontos</span></s.PointsContainer>

          </s.PointsAndDistanceContainer>

          <s.CampaignContainer>
            <img src={CampaignImage}/>
          </s.CampaignContainer>

          <s.RankingContainer>
            <s.Title>Ranking</s.Title>
            <s.Position>1. Marcos André Silva - 90km - 10.652 pts</s.Position>
            <s.Position>2. Felipe Silva - 78km - 8.526 pts</s.Position>
            <s.Position>3. Milene Santos de Paula - 65km - 7.526 pts</s.Position>
          </s.RankingContainer>

        </s.CenterContainer>

    </s.MainContainer>
  );
}

export default Home;
