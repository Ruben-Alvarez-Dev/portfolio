import { Children } from "react";
import "./HeaderGroup.css";

export const HeaderGroup = ({ children }) => {
  return (
    <div className="HeaderGroup">
      {children}
    </div>  
  )
}

export default HeaderGroup;
