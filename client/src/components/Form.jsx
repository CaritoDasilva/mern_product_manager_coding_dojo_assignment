import React, { useState } from 'react';
import axios from 'axios';

const Form = (props) => {
    const { onSubmitHandler, product, setProduct } = props;

    return (
        <div>
            <form onSubmit={(e) => onSubmitHandler(e)}>
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