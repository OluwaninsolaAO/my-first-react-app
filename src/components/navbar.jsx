const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary bg-secondary">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
