import "./navbar.css";

const Navbar = ({ buttonclicked }) => {
  const clicked = () => {
    buttonclicked(true);
  };
  return (
    <nav className="NavbarItems">
      <h1 className="brandname">LetsGrowMore</h1>
      <button className="button" onClick={clicked}>
        Get Users
      </button>
    </nav>
  );
};
export default Navbar;
