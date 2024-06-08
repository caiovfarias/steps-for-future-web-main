import s from "./ProfileStyles";
import ProfilePhoto from "../../assets/Achievements/ProfilePhoto.svg"
import FifthyKilometers from "../../assets/Achievements/FifthyKilometers.svg"
import GreenInitiave from "../../assets/Achievements/GreenInitiave.svg"
import Recycle from "../../assets/Achievements/Recycle.svg"
import TenKilometers from "../../assets/Achievements/TenKilometers.svg"
import Header from "../../components/Header/Header"


function Profile() {
  return (
    <s.MainContainer>
        <Header/>
        
        <s.CenterContainer>

          <s.ProfileContainer>
              <img src={ProfilePhoto} width={120} height={120}/>
            <s.InfosContainer>
              <h2>Felipe Silva</h2>
              <span>@fe_silva</span>
              <span>Plano Free</span>
            </s.InfosContainer>
          
          
          </s.ProfileContainer>

          <s.PointsAndDistanceContainer>

            <s.DistanceContainer><h1>78 km</h1> <span>percorridos</span></s.DistanceContainer>

            <s.PointsContainer><h1>8526</h1> <span>pontos</span></s.PointsContainer>

          </s.PointsAndDistanceContainer>

          <s.Title>Conquistas</s.Title>
          <s.AchievementsContainer>
            <img src={GreenInitiave} tooltip/>
            <img src={Recycle}/>
            <img src={TenKilometers}/>
            <img src={FifthyKilometers}/>
            <img src={GreenInitiave}/>
            <img src={GreenInitiave}/>
          </s.AchievementsContainer>
        </s.CenterContainer>

    </s.MainContainer>
  );
}

export default Profile;
