import Logo from '../icons_assets/Logo .svg'

// import Home from './Home';
// import About from './About';
// import Blog from './Blog';
import {Link} from 'react-router-dom'

const Nav = () => {
    return ( <>
    <nav className='nav'>
     <section  className='logo'>
        <img  src={Logo}/>
     </section>

    <div className='list'>
        <Link  to="/">Home</Link>
        <Link  to="/about">About</Link>
        <Link  to="/blog">Blog</Link>
    </div>
    </nav>


    </> );
}
 
export default Nav;