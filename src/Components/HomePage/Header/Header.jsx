import logo from "../logo100.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faHeadphones,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <header className="flex justify-between p-2 items-center">
      <div className="logoImg">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <nav>
          <ul className="flex items-center">
            <li className="mx-2 border-l border-[1px solid red] h-full flex items-center pl-2">
              <FontAwesomeIcon icon={faBell} />
            </li>
            <li className="mx-2">
              <a href="#">{/* icon alert */}</a>
            </li>
            <li className="mx-2">
              <FontAwesomeIcon icon={faGlobe} className="mr-2" />
              <a href="#">English</a>
            </li>
            <li className="mx-2">
              <FontAwesomeIcon icon={faHeadphones} className="mr-2" />
              <a href="#">ID: Ahmed khaled</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
