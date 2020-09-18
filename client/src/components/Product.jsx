import { Link } from '@reach/router';
import React from 'react';
import axios from 'axios'
import { useNavigate } from "@reach/router"

const Product = props => {
    const navigate = useNavigate()
    const { title, id } = props;
    const remove = () => {
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        navigate('/')
    }
    return (
        <div>
            {title}
            <Link to={`/product/${id}/edit`}>
                <button type="button" class="btn btn-info">Edit</button>

            </Link>

            <button type="button" class="btn btn-danger" onClick={remove}>Delete</button>
        </div >
    )
}

export default Product;