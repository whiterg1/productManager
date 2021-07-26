import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductForm from "./ProductForm";
import {Link} from "@reach/router";

export default (props) =>{
    const [products, setProducts] = useState([]);

    useEffect( () => {
        axios.get("http://localhost:8000/api/products")
        .then(res=>setProducts(res.data))
        .catch(err=>console.log("Error: ", err));
    }, [])

    return(
        <div>
            <ProductForm/>
            <h1>All Products:</h1>
            {
            products.map((product, index) =>{
                return(
                    <div key={index}>
                        <Link to={"/products/" + product._id}>
                        <p>{product.title}</p> 
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

