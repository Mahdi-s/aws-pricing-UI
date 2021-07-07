import React from "react";
import Table from "../components/Table";
import StackChart from "../components/StackChart";
import PieChart from "../components/PieChart";
import NavBar from "../components/NavBar";

function App() {
    return (
    <div>

        <NavBar />

        <div class = 'flex-container'>

        <StackChart />
        <PieChart />

        </div>
        <div class = 'table-container '>
        <Table />
        </div>

    </div>
    )
}

export default App;
