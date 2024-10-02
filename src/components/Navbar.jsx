import { Link} from "react-router-dom";
import '../assets/Styles/Nav.css'
// import logo from '../assets/images/pexels-pixabay-531880.jpg'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
  
  return (
    <>
      <div className="nav">
        {/* <div className="logo"><img src={logo} alt="" /></div> */}
        <ul>
          <li>
            <Link to='/adminportal'><AccountBalanceIcon/></Link>
          </li>
          <li>
            <Link to='/adminportal/users'><PeopleIcon /></Link>
          </li>
          <li>
            <Link to='/'><LogoutIcon/></Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
