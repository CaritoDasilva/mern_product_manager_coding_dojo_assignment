import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import Form from '../components/Form';
import axios from 'axios';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/")
            .then(res => setProducts(res.data.products))
    }, [products])


    return (
        <div className="container">
            <div className="col-md-6 offset-md-3">
                <Form />
            </div>
            <div className="col-md-6 offset-md-3">
                All Products
                {products ? products.map((product, i) => {
                return (
                    <a href={`/product/${product._id}`} key={i} >
                        <Product title={product.title} id={product._id} />

                    </a>
                )
            }) : ''}
            </div>

        </div>
    )
}

export default Home;