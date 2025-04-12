import ExpensesTable from "./components/ExpensesTable";
import { useState, useEffect } from "react";

function MainScreen() {
    return (
        <div>
            <ExpensesTable 
                pic="https://static.vecteezy.com/system/resources/thumbnails/022/664/807/small_2x/cat-face-silhouettes-cat-face-svg-black-and-white-cat-vector.jpg" 
                numOfPairs={6} 
            />
        </div>
    );
}

export default MainScreen;