import React from "react";


const myList = ["Ivan", "Petr", "Sidor"];
const myObject = {
    name: "Ivan",
    age: 20
} 
// map, filter, for

export const Footer = ({length}) => {
    const year = new Date();
    return (
        <footer>
            <h1 id="Footer">Footer</h1>
            <p className="total-items">Total {length} {length <= 1 ? "item": "items"}</p>
            <p>{year.getFullYear()} My website. All rights MINE</p>
        </footer>
    );
}