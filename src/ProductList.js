import React from 'react';
import ProductRow from './ProductRow';

function ProductList(props){

    function makeHeaders(){
        let headers = [];
        let h;
        for(h of props.tableHeaders){
            headers.push(<th className="px-4 py-2">{h}</th>);
        }

        return headers
    }

    function makeList(){
        let cells = [];
        let p;
        for(p of props.products){
            cells.push(makeCell(p));
        }
        return cells;
    }

    function makeCell (prod){
        return <ProductRow product = {prod}/>
    }

    return(
        <table className ="table-auto">
            <tr>
                {makeHeaders()}
            </tr>
            {makeList()}
        </table>
    )
}

export default ProductList;