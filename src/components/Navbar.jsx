import { Link } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
   <nav>
        <ul>

            <li><Link to="/Books">Books</Link></li>
            <li><Link to="/singleBook" >Book</Link></li>
            {!user &&
            <>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/Login">Login</Link></li>
            </>
            }

            {user &&
            <>
            <li><Link to="/profile">Profile</Link></li>
            </>
            }
        </ul>
    </nav>
  );
}

export default NavBar;