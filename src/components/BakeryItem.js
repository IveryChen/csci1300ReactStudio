// TODO: create a component that displays a single bakery item
export default function BakeryItem(props){
    return(
        <div className="card">
            <img src={props.image}></img>
            <p>{props.name}</p>
            <p>{props.description}</p>
            <p>${props.price}</p> 
            <button onClick={props.addToCart}>Add to cart</button>
        </div>
    );
}