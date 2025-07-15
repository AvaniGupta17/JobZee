import React, { useContext } from 'react'
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaLinkedin,FaGithub} from "react-icons/fa";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
     <div>&copy; The amount of good luck coming your way depends on your willingness to act</div>
      <div>
        <Link to={"https://github.com/AvaniGupta17"} target="_blank">
          <FaGithub />
        </Link>
        <Link to={"https://www.linkedin.com/in/avani-gupta-9b90b82b2/"} target="_blank">
          <FaLinkedin />
        </Link>
        
      </div>
    </footer>
  )
}

export default Footer
