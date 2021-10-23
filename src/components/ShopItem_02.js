import React from "react";
import "./ShopItem_02.scss";

export default function ShopItem_02({name,remoteUrl,price}){
    return(
        <div>
            <div class="collection-item">
                <img class="image" src={remoteUrl}/>
                <div class="collection-footer">
                    <span class="name">{name}</span>
                    <span class="price">{price}</span>
                </div>
                <button class="custom-button">Add to Cart</button>
            </div>
        </div>
    )
}