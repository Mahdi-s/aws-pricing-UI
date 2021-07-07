import React from "react";

function Table() {

    return ( 
    <div id='table'>
        <table class='border table table-striped table-hover'>
            <thead class='table-dark'>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">SKU</th>
                    <th scope="col">Instance</th>
                    <th scope="col">Region</th>
                    <th scope="col">Cost</th>
                    <th scope="col">Cores</th>
                    <th scope="col">Clockspeed</th>
                </tr>
            </thead>
            <tbody >
                <tr>
                    <th scope="row">1</th>
                    <td>SZ472S2RBJNMG88</td>
                    <td>EC2</td>
                    <td>Gov-West</td>
                    <td>0</td>
                    <td>40</td>
                    <td>2.4</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>8ZXHGFU4QJ2GBPJB</td>
                    <td>C5</td>
                    <td>Gov-East</td>
                    <td>0</td>
                    <td>2</td>
                    <td>2.8</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>ADPQBU5Q5D6AKHWD</td>
                    <td>inf1</td>
                    <td>US-West-1</td>
                    <td>7.29</td>
                    <td>96</td>
                    <td>N/A</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}


export default Table;