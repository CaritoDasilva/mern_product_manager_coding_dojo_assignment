import React, { useState, useEffect } from 'react';
import { useNavigate } from "@reach/router"
import Form from '../components/Form';

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
            <Form onSubmitHandler={onSubmitHandler} product={product} setProduct={setProduct} />
        </div>
    )
}

export default Edit;