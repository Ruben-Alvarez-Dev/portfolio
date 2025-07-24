import "./HeaderComponent.css";

const HeaderComponent = () => {
  return (
    <header className="HeaderComponent">
    <nav>
      <div className="logo-group">
        <span className="HeaderLogo">Logo</span>
        <span className="HeaderTitle">Mi Portafolio</span>
      </div>

      <div className="links-group">
        <span className="HeaderLink">Link 1</span>
        <span className="HeaderLink">Link 2</span>
        <span className="HeaderLink">Link 3</span>
        <span className="HeaderLink">Link 4</span>
      </div>

      {/* Spacer para móvil - se expande cuando los links están ocultos */}
      <div className="mobile-spacer"></div>

      <div className="switch-group">
        <span className="HeaderSwitch">Switch 1</span>
        <span className="HeaderSwitch">Switch 2</span>
      </div>
      
      <div className="burguer-group">
        <span className="HeaderBurguer">Burguer</span>
      </div>
    </nav>
    </header>
  );
}

export default HeaderComponent;
