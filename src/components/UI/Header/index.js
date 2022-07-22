import logo from "assets/Group.svg";
import { Header as MainHeader } from "./header.style";

const Header = ({ courseName }) => {
  return (
    <MainHeader>
      <div>
        <img src={logo} alt="company logo" />
      </div>

      <div>
        <h2>{courseName} study Plan</h2>
      </div>
    </MainHeader>
  );
};

export default Header;
