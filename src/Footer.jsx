import React from "react";


const myList = ["Ivan", "Petr", "Sidor"];
const myObject = {
    name: "Ivan",
    age: 20
} 
// map, filter, for

export const Footer = () => {
    const year = new Date();
    return (
        <footer>
            <h1>Footer</h1>
            <p>{year.getFullYear()} My website. All rights MINE</p>
        </footer>
    );
}