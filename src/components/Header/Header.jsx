import restauranfood from '../icons_assets/restauranfood.jpg'
const Header = () => {
    return ( <>
    <section className='container'>
    <div  className='card'>
            <h1>Little Lemon</h1>
      <h4>Chicago</h4>
      <p>We are a family owned Mediterranean restaurant, 
         focused on traditional recipes served with a modern twist.
      </p>
       <button className="btn">Reserve a Table</button>
        </div>
      
       <section>
        <img src={restauranfood} alt='restauranfood' className='img' />
        </section>  
    </section>
    
    </> );
}
 
export default Header;