import { Link } from 'react-router-dom'

const Header = () => {
    return (
      <nav className="orange darken-1">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            React SPA
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Header;