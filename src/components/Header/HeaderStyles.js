import styled from "styled-components";
import { Colors } from "../../theme/DesignTokens";

const Header = styled.div`
  display: flex;
  height: 16%;
  width: 100%;
  flex-direction: column;
`;

const TopContainer = styled.div`
  display: flex;
  height: 50%;
  width: 100%;
  background-color: ${Colors.PRIMARY};
  justify-content: space-around;
  align-items: center;
`;

const BottomContainer = styled.div`
  display: flex;
  height: 50%;
  width: 100%;
  background-color: ${Colors.LIGHTGRAY};
  justify-content: space-around;
  align-items: center;
`;


const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: max-content;
  width: max-content;
`;

const ItemText = styled.h3`
  color: ${Colors.BLACK};
  margin-left: 10px;

`

const HeaderStyles = {
  Header,
  TopContainer,
  ItemContainer,
  BottomContainer,
  ItemText
};

export default HeaderStyles;
