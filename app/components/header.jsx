import { Link } from '@remix-run/react'
import Logo from '../../public/img/logo.svg'
const Header = () => {
  return (
    <header className='header'>
       <div className="contenedor barra">
            <Link to='/'>
                <img className='logo' src={Logo} alt="GuitarLA" />
            </Link>
            <nav className='navegacion'>
                <Link to='/'>Home</Link>
                <Link to='/us'>Us</Link>
                <Link to='/store'>Store</Link>
                <Link to='/blog'>Blog</Link>
            </nav>
       </div>
    </header>
  )
}

export default Header