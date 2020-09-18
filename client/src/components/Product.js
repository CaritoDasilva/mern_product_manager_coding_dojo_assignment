import React from 'react';

const Product = props => {
    const { title } = props
    return (
        <div>
            {title}
        </div>
    )
}

export default Product;