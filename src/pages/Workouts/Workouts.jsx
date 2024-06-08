import s from "./WorkoutsStyles";
import CardioWorkout from "../../assets/Workouts/CardioWorkout.svg"
import ChalangeWorkout from "../../assets/Workouts/ChalangeWorkout.svg"
import StrenghtWorkout from "../../assets/Workouts/StrenghtWorkout.svg"
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header"


function Workouts() {
  return (
    <s.MainContainer>
        <Header/>
        
        <s.CenterContainer>

          <s.CalendarTitle>Calendário</s.CalendarTitle>

          <s.Calendar>
            <s.Day>3</s.Day>
            <s.Day>4</s.Day>
            <s.Day>5</s.Day>
            <s.Day>6</s.Day>
            <s.Day>7</s.Day>
            <s.Day variant="selected">8</s.Day>
            <s.Day>9</s.Day>
          </s.Calendar>

          <s.Workouts>
            
            <s.Workout>
              Treino de Força
              <img src={StrenghtWorkout} />
            </s.Workout>

            <s.Workout>
              Desafio
              <img src={ChalangeWorkout} />
            </s.Workout>
           
            <s.Workout>
              Cardio
              <img src={CardioWorkout} />
            </s.Workout>

            
          </s.Workouts>

          

        </s.CenterContainer>

    </s.MainContainer>
  );
}

export default Workouts;
