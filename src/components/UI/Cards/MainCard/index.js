import { StyledCard } from "../cards.style";
import colors from "utils/colors";

const {darkBlue} = colors;

const MainCard = (props) => {
  return <StyledCard borderColor={darkBlue} isMain>
    {props.children}
    </StyledCard>;
};

export default MainCard;
