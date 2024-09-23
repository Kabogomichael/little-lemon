import Logo from '../images/Logo.svg'

const Nav = () => {
    return ( <>
    <nav className='nav'>
     <section >
        <img  src={Logo}/>
     </section>
    <ul>
        <li><a href=''>Home</a></li>
        <li><a href=''>About</a></li>
        <li><a href=''>logo</a></li>
    </ul>
    </nav>
    
    
    
    
    </> );
}
 
export default Nav;