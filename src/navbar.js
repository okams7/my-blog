const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>مدونة احمد</h1>
      <div className="links">
        <a href="/">الرئيسية</a>
        <a href="/create" style={{ color: "white", backgroundColor: "#ff0000", borderRadius: "8px" }}>مدونة جديدة</a>
      </div>
    </nav>
  );
}

export default Navbar;