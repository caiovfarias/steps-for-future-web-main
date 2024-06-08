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

const CalendarTitle = styled.h4`
    color: ${Colors.PRIMARY};
    margin-top: 30px;

`

const Calendar = styled.div`
    margin-top: 30px;
    width: 30%;
    height: 20%;
    display: flex;
    justify-content: space-between;
`

const Day = styled.div`
    display: flex;
    height: 50px;
    width: 50px;
    background-color: ${props => props.variant  === "selected" ?  Colors.DARKBLUE : Colors.LIGHTGRAY};
    color: ${props => props.variant  === "selected" ?  Colors.WHITE : Colors.DARKBLUE};
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    font-weight: 700;

`

const Workouts = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;

`

const Workout = styled.div`
    display: flex;
    font-size: large;
    font-weight: 700;
    justify-content: center;
    align-items: center;
    color: ${Colors.DARKBLUE};
    border-radius: 20px;
    flex-direction: column;
    cursor: pointer;

`

const WorkoutStyles = {
    MainContainer,
    CenterContainer,
    CalendarTitle,
    Calendar,
    Day,
    Workouts,
    Workout
}


export default WorkoutStyles;