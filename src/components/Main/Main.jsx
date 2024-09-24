import { useState } from "react";
import { data } from "../../data";
const Main = () => {
    const [Dishes,setDishes]=useState(data)
    return ( <>
    <div className="card-headers">
        <h2>This weeks specials!</h2>
        <button className="btn-onlineMenu">Online Menu</button>
    </div>
    
    <div className="card-container">
    {Dishes.map((Dish)=>{
    return (
    <div  className="Card" key={Dish.id} >
             <img src={Dish.image} alt={Dish.title} className="card-img" />
            <div className="card-info">
                <div className="card-details">
                    <h3 className="card-title">{Dish.title}</h3>
                <h3 className="card-price">${Dish.price}</h3> 
                </div>
                 <p className="card-description">{Dish.description}</p>
            </div>
           
          <a href="#" className="card-link">Order a Delivery</a>

    </div>
    )


    })}
  

    </div> </>);
}

export default Main;