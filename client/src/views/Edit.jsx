import React, { useState, useEffect } from 'react';
import { useNavigate } from "@reach/router"

import axios from 'axios';
const Edit = (props) => {
    const navigate = useNavigate()
    const { id } = props;
    const [product, setProduct] = useState({
        title: '',
        price: 0,
        description: ''
    })
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data.product))
            .catch(err => console.log(err))
    }, [id])
    const onSubmitHandler = () => {
        axios.put(`http://localhost:8000/api/products/update/${id}`, {
            ...product
        })
            .then(res => res => console.log(res))
            .catch(err => console.log(err))

        navigate('/')
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Title</label>
                    <input type="text" value={product.title} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={(e) => setProduct({ ...product, title: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Price</label>
                    <input type="number" value={product.price} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={(e) => setProduct({ ...product, price: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Description</label>
                    <input type="text" value={product.description} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={(e) => setProduct({ ...product, description: e.target.value })} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Edit;