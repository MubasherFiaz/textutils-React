// import propTypes from 'prop-types';
import { Link } from "react-router-dom";
function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode} text-${props.mode==='light'?'dark':'white'}`}>
  <div className="container-fluid">
    <Link className={`navbar-brand text-${props.mode==='light'?'dark':'white'} `} to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active text-${props.mode==='light'?'dark':'white'} `} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${props.mode==='light'?'dark':'white'} `} to="/about">{props.aboutText}</Link>
        </li>
        
      </ul>
      
      <form className="form-inline">
      <div className="custom-control custom-switch float-end form-inline my-2 my-lg-0">
        <input type="checkbox" onChange={props.toggleMode} className="custom-control-input mr-sm-2" id="customSwitch1"/>
        <label className={`custom-control-label`} for="customSwitch1">Enable Dark Mode</label>
      </div>
      </form>
      
      
    </div>
  </div>
</nav>
    );
    
}
function Navbar1(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.aboutText}</a>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    );
    
}
export default Navbar;
export {Navbar1};

Navbar.defaultProps = {
    title : 'Set title here',
    aboutText : 'About text here'
};