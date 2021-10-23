import React, { useState } from "react";
import "./ShopTwoPage_02.scss";
import mensData from "../components/Mens";
import jacketsData from "../components/Jackets";
import ShopItem_02 from "../components/ShopItem_02";


export default function ShopTwoPage_02 (){
    const [jackets,setJackets]=useState(jacketsData);
    const [mens,setMens]=useState(mensData);

    return (
        <div>
             <div className="shop-page">
                <div className="collection-overview">
                    <div className="collection-preview">
                        <h2 className="title">Mens</h2>  
                        <div className="preview">
                            {mens.map((item)=>{
                                const {id, name,remoteUrl,price}=item;
                                return(
                                    <ShopItem_02
                                    id= {id}
                                    name= {name}
                                    remoteUrl={remoteUrl}
                                    price={price}/>
                                );
                            })
                            }
                            
                        </div>
                    </div>
                    <div className="collection-preview">
                        <h2 className="title">Jackets</h2>  
                        <div className="preview">
                            {jackets.map((item)=>{
                                const {id, name,remoteUrl,price}=item;
                                return(
                                    <ShopItem_02
                                    id= {id}
                                    name= {name}
                                    remoteUrl={remoteUrl}
                                    price={price}/>
                                );
                            })
                            }
                            
                        </div>
                    </div>
                </div>
            </div> 
        </div>   
    )
}
