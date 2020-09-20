import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import Form from '../components/Form';
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from '../components/DeleteButton';


const Home = () => {
    const [product, setProduct] = useState({
        title: '',
        price: 0,
        description: ''
    })
    const [products, setProducts] = useState([]);
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/products/new', {
            ...product
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/")
            .then(res => setProducts(res.data.products))
    }, [products])


    return (
        <div className="container">
            <div className="col-md-6 offset-md-3">
                <Form onSubmitHandler={onSubmitHandler} product={product} setProduct={setProduct} />
            </div>
            <div className="col-md-6 offset-md-3">
                All Products
                {products ? products.map((product, i) => {
                return (
                    <>
                        <a href={`/product/${product._id}`} key={i} >
                            <Product title={product.title} id={product._id} />
                        </a>
                        <Link to={`/product/${product._id}/edit`}>
                            <button type="button" class="btn btn-info">Edit</button>
                        </Link>
                        <DeleteButton id={product._id} />
                    </>
                )
            }) : ''}
            </div>

        </div>
    )
}

export default Home;