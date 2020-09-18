import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [product, setProduct] = useState({
        title: '',
        price: 0,
        description: ''
    })
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
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={(e) => setProduct({ ...product, title: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Price</label>
                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={(e) => setProduct({ ...product, price: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Description</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={(e) => setProduct({ ...product, description: e.target.value })} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Form;