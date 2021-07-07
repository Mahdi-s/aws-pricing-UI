import React from "react";
import Table from "../components/Table";
import StackChart from "../components/StackChart";
import PieChart from "../components/PieChart";
import NavBar from "../components/NavBar";

function App() {
    return (
    <div>
        <NavBar />
        <StackChart />
        <PieChart />
        <Table />
    </div>
    )
}

export default App;
