import React, {useEffect, useState} from 'react'
import axios from 'axios';

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


    return (
        <div>
            <h3>{singleProduct.title}</h3>
            <p>Price: ${singleProduct.price}</p>
            <p>Description: {singleProduct.description}</p>
        </div>
    )
}

export default ViewProduct
