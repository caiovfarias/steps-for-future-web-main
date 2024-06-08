
import Check from "../../../assets/Check.svg";
import s from "./PlansStyles";
import { Button } from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import { LargerButton } from "../../../components/LargerButton/LargerButton";
import Logo from "../../../components/Logo/Logo"


function Plans() {
  return (
    <s.MainContainer>
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

            <s.CenterContainer>
            <s.PlanContainer>
              <s.PlanHeader>
                <s.PlanHeaderTitle variant="secondary">Plano Free</s.PlanHeaderTitle>
              </s.PlanHeader>

              <s.PlanDescriptionRow>
                <img src={Check} />{" "}
                <s.PlanDescriptionRowText>
                  Acesso limitado a conteúdo
                </s.PlanDescriptionRowText>{" "}
              </s.PlanDescriptionRow>
              <s.PlanDescriptionRow>
                <img src={Check} />{" "}
                <s.PlanDescriptionRowText>
                Criação de desafios
                </s.PlanDescriptionRowText>{" "}
              </s.PlanDescriptionRow>

              <s.PlanDescriptionRow>
                <s.PlanPriceText>
                  R$ 0,00/mês
                </s.PlanPriceText>{" "}
              </s.PlanDescriptionRow>

              <s.PlanButtonContainer>
                <Link to="/register">
                  <Button variant="secondary">Escolher</Button>
                </Link>
              </s.PlanButtonContainer>
            </s.PlanContainer>


            <s.PlanContainer>
              <s.PlanHeader>
                <s.PlanHeaderTitle variant="secondary">Plano Premium Mensal</s.PlanHeaderTitle>
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

              <s.PlanDescriptionRow>
                <s.PlanPriceText>
                  R$ 20,00/mês
                </s.PlanPriceText>{" "}
              </s.PlanDescriptionRow>

              <s.PlanButtonContainer>
                  <Button variant="secondary" onClick={() => alert("Este plano está indisponível no momento")}>Escolher</Button>
              </s.PlanButtonContainer>
            </s.PlanContainer>


            <s.PlanContainer>
              <s.PlanHeader>
                <s.PlanHeaderTitle variant="secondary">Plano Premium Anual</s.PlanHeaderTitle>
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

              <s.PlanDescriptionRow>
                <s.PlanPriceText>
                  R$ 200,00/ano
                </s.PlanPriceText>{" "}
              </s.PlanDescriptionRow>

              <s.PlanButtonContainer>
                <Button variant="secondary" onClick={() => alert("Este plano está indisponível no momento")}>Escolher</Button>  
              </s.PlanButtonContainer>
            </s.PlanContainer>

        </s.CenterContainer>


        <s.ButtonContainer>
          <Link to={"/"}>
            <LargerButton variant="secondary">Fazer isso depois</LargerButton>
          </Link>
        </s.ButtonContainer>

        

    </s.MainContainer>
  );
}

export default Plans;
