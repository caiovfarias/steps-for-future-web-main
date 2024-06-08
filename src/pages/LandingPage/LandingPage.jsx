import Logo from "../../components/Logo/Logo";
import LogoHome from "../../assets/Logo.svg"
import Check from "../../assets/Check.svg";
import s from "./LandingPageStyles";
import { Button } from "../../components/Button/Button";
import { LargerButton } from "../../components/LargerButton/LargerButton";
import { Link } from "react-router-dom";
import { Colors } from "../../theme/DesignTokens";

function LandingPage() {
  return (
    <s.MainContainer>
      <s.TopContainer>
        <s.Header>
          <Logo></Logo>
          <s.ButtonsContainer>
            <Link to="/register">
                <Button variant="secondary">Cadastrar</Button>
            </Link>
            <Link to="/login">
                <Button>Entrar</Button>
            </Link>
          </s.ButtonsContainer>
        </s.Header>

        <s.Title>Cuidando do seu Bem-estar</s.Title>

        <s.TopSubtitleContainer>
        <img src={LogoHome} width={400} height={400}/>
          <s.Subtitle>
            Que tal ganhar pontos enquanto faz atividades físicas e contribui
            com o meio ambiente?
          </s.Subtitle>


        </s.TopSubtitleContainer>
      </s.TopContainer>

      <s.CenterContainer>
        <s.PlanContainer>
          <s.PlanHeader>
            <s.PlanHeaderTitle variant="secondary">Para Você</s.PlanHeaderTitle>
          </s.PlanHeader>

          <s.PlanDescriptionRow>
            <img src={Check} />{" "}
            <s.PlanDescriptionRowText>
              Acesso ilimitado a conteúdo exclusivo
            </s.PlanDescriptionRowText>{" "}
          </s.PlanDescriptionRow>
          <s.PlanDescriptionRow>
            <img src={Check} />{" "}
            <s.PlanDescriptionRowText>
              Descontos em produtos da saúde e fitness
            </s.PlanDescriptionRowText>{" "}
          </s.PlanDescriptionRow>
          <s.PlanDescriptionRow>
            <img src={Check} />{" "}
            <s.PlanDescriptionRowText>
              Consulta com profissionais da área da saúde
            </s.PlanDescriptionRowText>{" "}
          </s.PlanDescriptionRow>

          <s.PlanButtonContainer>
            <Link to="/plans">
               <Button variant="secondary">Ver Planos</Button>
            </Link>
          </s.PlanButtonContainer>
        </s.PlanContainer>

        <s.PlanContainer>
          <s.PlanHeader>
            <s.PlanHeaderTitle>Para Empresas</s.PlanHeaderTitle>
          </s.PlanHeader>

          <s.PlanDescriptionRow>
            <img src={Check} />{" "}
            <s.PlanDescriptionRowText>
              Equipes mais engajadas e produtivas
            </s.PlanDescriptionRowText>{" "}
          </s.PlanDescriptionRow>
          <s.PlanDescriptionRow>
            <img src={Check} />{" "}
            <s.PlanDescriptionRowText>
              Redução na rotatividade
            </s.PlanDescriptionRowText>{" "}
          </s.PlanDescriptionRow>
          <s.PlanDescriptionRow>
            <img src={Check} />{" "}
            <s.PlanDescriptionRowText>
              Atração e retenção de talentos
            </s.PlanDescriptionRowText>{" "}
          </s.PlanDescriptionRow>
          <s.PlanButtonContainer>
            <Button>Solicitar Cotação</Button>
          </s.PlanButtonContainer>
        </s.PlanContainer>
      </s.CenterContainer>

      <s.BottomCotainer>
        <s.BottomSubtitleContainer>
          <s.Subtitle>
            + 120 treinos e desafios 
          </s.Subtitle>
          <s.Subtitle>
          + 200 profissionais de saúde  
          </s.Subtitle>
          <s.Subtitle>
          + 80 parceiros
          </s.Subtitle>
          <s.Subtitle>
          + Campanhas para contribuir com o meio ambiente
          </s.Subtitle>
        </s.BottomSubtitleContainer>

        <s.BottomButtonsContainer>
            <LargerButton variant="secondary">Baixe o Aplicativo</LargerButton>
            <LargerButton>Crie sua Conta</LargerButton>
        </s.BottomButtonsContainer>
      </s.BottomCotainer>
    </s.MainContainer>
  );
}

export default LandingPage;
