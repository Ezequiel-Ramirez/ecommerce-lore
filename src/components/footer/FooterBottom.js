import "./FooterBottom.css";

import { GrLinkedin } from "react-icons/gr";

const FooterBottom = () => {
  return (
    <div className="FooterBottom">
      <p>Sitio creado por Ezequiel Ramirez, Web Developer Front End</p>
      <a
        href="https://www.linkedin.com/in/ezequiel-e-ramirez/"
        target="_blank"
        rel="noreferrer"
      >
        <GrLinkedin color="white" size={23} />
      </a>
    </div>
  );
};

export default FooterBottom;
