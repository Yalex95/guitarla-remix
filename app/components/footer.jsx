import { Link} from '@remix-run/react'
import Logo from '../../public/img/logo.svg'
import Navigation from './navigation'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contenedor contenido">
        <div className="contenedor barra">
          <Link to="/">
            <img className="logo" src={Logo} alt="GuitarLA" />
          </Link>
          <Navigation />
          <p className="copyright">All rights reserved {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
