import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {navigate} from "@reach/router";

const UpdateProduct = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("")

    useEffect( ()=> {
        axios.get("http://localhost:8000/api/products/" + props.id)
        .then(res => {
            console.log(res.data.oneProduct);
            setTitle(res.data.oneProduct.title);
            setPrice(res.data.oneProduct.price);
            setDescription(res.data.oneProduct.description);
        })
        .catch(err => {console.log(err)});
    }, [props.id])

    const processUpdate = e => {
        e.preventDefault();
    axios.put("http://localhost:8000/api/products/update/" + props.id, { 
        title,
        price,
        description
    })
    .then(res=> {
        console.log(res.data);
        navigate("/products")
    })
    .catch(err => console.log(err))

    }

    return(
        <form onSubmit={processUpdate}>
            <p>
                <label>Title: </label>
                <input type="text" onChange={(e)=> setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price: </label>
                <input type="number" onChange = {(e)=> setPrice(e.target.value)} value={price} />
            </p>
            <p>
                <label>Description: </label>
                <input type="text" onChange={(e)=> setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit" value="Update"/>
        </form>

    )
}

export default UpdateProduct
