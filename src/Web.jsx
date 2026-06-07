import React, {useState} from "react";

function Web() {
    const [color, setColor] = useState("red")
    
    const [car, setCar] = useState({
        model: "BMW",
        year: 2020,
        color: "red"
    })
    // console.log(color)
    return (
        <div className="">

        <h2>{car.model}</h2>
        <h2>{car.year}</h2>
        <p>I have a {car.color} {car.model}</p>
        <button onClick={() => setCar({...car, color: 'blue'})}></button>

        <h1>Lorem {color}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestias.
        </p>

        <button onClick={() => setColor('blue')}>
            Change color 1
        </button>
        <button onClick={() => setColor('red')}>
            Change color 2
        </button>
        <button onClick={() => setColor('green')}>
            Change color 3
        </button>
        </div>
    );
}

export default Web;