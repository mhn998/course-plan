import { StyledCard } from "../cards.style";
import colors from "utils/colors";

const { green } = colors;

const SecondaryCard = (props) => {
  return <StyledCard borderColor={green}>{props.children}</StyledCard>;
};

export default SecondaryCard;
