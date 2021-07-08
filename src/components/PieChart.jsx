import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';



function PChart() {
  return (
    <div class='flex-child stack-container border'>
      <div>
        <button></button>
      </div>
      <div>
      <PieChart
        data={[
          { title: 'One', value: 10, color: '#E38627' },
          { title: 'Two', value: 15, color: '#C13C37' },
          { title: 'Three', value: 20, color: '#6A2135' },
        ]}
      />
      </div>
      <div id='table'>
        <table class='border table table-striped table-hover' >
          <thead>
            <tr>
                    <th scope="col">Item Number</th>
                    <th scope="col">Instance</th>
                    <th scope="col">Region</th>
                    <th scope="col">Cost</th>
            </tr>
          </thead>
          <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>EC2</td>
                    <td>Gov-West</td>
                    <td>$0.79/day</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>EC2</td>
                    <td>Gov-West</td>
                    <td>$0.79/day</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>EC2</td>
                    <td>Gov-West</td>
                    <td>$0.79/day</td>
                </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PChart;