import styled from "styled-components";
import { Colors } from '../../theme/DesignTokens'

export const Input = styled.input`

color: ${Colors.DARKBLUE};
padding: 0px 15px;
width: 100%;
max-width: 500px;
border: 1px solid ${Colors.PRIMARY};
border-radius: 10px;
height: 40px;

&:focus {
     outline: none;
     border-color: ${Colors.PRIMARY};
     opacity: 0.9;
    }

`;