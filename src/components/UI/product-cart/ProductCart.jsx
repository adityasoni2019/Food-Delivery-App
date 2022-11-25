import React from "react";

import "../../../styles/product-cart.css";

import { Link } from "react-router-dom";
import PorductImg from '../../../assets/images/product_2.1.jpg'

const ProductCart= (props) =>{
    const {id, title, image01, price} = props.item;
    return (

        <div className="product__item">

            <div className="product__img">
                <img src = {image01} alt = 'product image' className="w-50 " />
            </div>

            <div className="product__content">
                <h5>  <Link to = {`/foods/${id}`}>{title}</Link> </h5>
                <div>
                    <span className="product__price">${price}</span>

                    <button className= "addToCart_btn">Add to cart</button>
                </div>
            </div>
        </div> 
    );
}

export default ProductCart; 