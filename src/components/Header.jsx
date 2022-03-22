import { Link } from "react-router-dom"

const Header = () =>{
    return (
        <nav>
    <div className="nav-wrapper">
      <Link to='/'  className="brand-logo">Router app</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/contacts">Contacts</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/movie/:id">Movie</Link></li>
      </ul>
    </div>
  </nav>
    )
}

export default Header