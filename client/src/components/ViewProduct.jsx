import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {navigate} from "@reach/router"

const ViewProduct = (props) => {


    const [singleProduct, setSingleProduct] = useState({});

    useEffect( ()=> {
        axios.get("http://localhost:8000/api/products/" + props.id)
        .then(res => {
            console.log(res.data.oneProduct);
            setSingleProduct(res.data.oneProduct);
        })
        .catch(err => {console.log(err)});
    }, [props.id])

    const deleteProduct = (deleteID) =>{
        axios.delete("http://localhost:8000/api/products/delete/" + singleProduct._id)
        .then(res=> {
            navigate("/products")
        })
        .catch(err=> console.log(err))
    }


    return (
        <div>
            <h3>{singleProduct.title}</h3>
            <p>Price: ${singleProduct.price}</p>
            <p>Description: {singleProduct.description}</p>
            <button onClick={deleteProduct}>Delete</button>
        </div>
    )
}

export default ViewProduct
