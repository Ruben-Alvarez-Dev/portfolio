import "./HeaderComponent.css";

import HeaderGroup from './HeaderGroup/HeaderGroup';

const HeaderComponent = () => {
  
  return (
    <header className="HeaderComponent">
      <HeaderGroup className="HeaderGroup logo">
        <span className="HeaderLogo">Logo</span>
        <span className="HeaderTitle">Mi Portafolio</span>
      </HeaderGroup>
      
      <HeaderGroup className="HeaderGroup links">
        <span className="HeaderLink">Link 1</span>
        <span className="HeaderLink">Link 2</span>
        <span className="HeaderLink">Link 3</span>
        <span className="HeaderLink">Link 4</span>
      </HeaderGroup>
      
      <HeaderGroup className="HeaderGroup switches">
        <span className="HeaderSwitch">Switch 1</span>
        <span className="HeaderSwitch">Switch 2</span>
      </HeaderGroup>
      <HeaderGroup className="HeaderGroup burguer">
        <span className="HeaderBurguer">Burguer</span>
      </HeaderGroup>      
      
    </header>
  );
};

export default HeaderComponent;
