import React from 'react';
import { useNavigate } from '@reach/router';
import axios from 'axios'

const DeleteButton = props => {
    const navigate = useNavigate()
    const { id } = props;
    const remove = () => {
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        navigate('/')
    }
    return (
        <button type="button" class="btn btn-danger" onClick={remove}>Delete</button>
    )
}

export default DeleteButton;