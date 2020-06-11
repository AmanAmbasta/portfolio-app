import React from "react";

function Cards(props) {
    // console.log(props.productAttributes);

    return (
        <div className="item">
            <img src={props.imageUrls} alt="item" />
            <br />
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <a href={props.goToLink}><button className="add-to-cart" type="button">Add to cart</button></a>
        </div>
    )
}
export default Cards;