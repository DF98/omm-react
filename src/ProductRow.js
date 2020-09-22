import React from 'react';

function ProductRow(props) {
    return (
        <tr>
            <td className ="border px-4 py-2">{props.product.name}</td>
            <td className ="border px-4 py-2">{props.product.description}</td>
            <td className ="border px-4 py-2">{props.product.price}</td>
        </tr>
    )
}

export default ProductRow;