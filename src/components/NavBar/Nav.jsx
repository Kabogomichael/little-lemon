import Logo from '../icons_assets/Logo .svg'

const Nav = () => {
    return ( <>
    <nav className='nav'>
     <section  className='logo'>
        <img  src={Logo}/>
     </section>
    <ul className='list'>
        <li><a href=''>Home</a></li>
        <li><a href=''>About</a></li>
        <li><a href=''>blog</a></li>
       
    </ul>
    </nav>
    
    
    
    
    </> );
}
 
export default Nav;