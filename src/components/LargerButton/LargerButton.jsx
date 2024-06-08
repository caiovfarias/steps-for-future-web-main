import styled from "styled-components"
import { Colors } from '../../theme/DesignTokens'

export const LargerButton = styled.button`
  background: ${(props) => props.variant  === "secondary" ?  Colors.PRIMARY : Colors.WHITE};
  color: ${props => props.variant  === "secondary" ?  Colors.WHITE : Colors.PRIMARY};
  padding: 0px 15px;
  min-width: 90px;
  border: 1px solid ${props => props.variant  === "secondary" ?  Colors.PRIMARY : Colors.DARKBLUE};
  border-radius: 15px;
  height: 50px;
  width: 300px;
  cursor: pointer;
  font-weight: 600;
  font-size: large;
  &:hover {
    opacity: 0.9;
    transition: 2ms;
  }
`;
