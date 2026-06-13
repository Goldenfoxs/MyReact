import React, {useState} from "react";
// import myImg from "./images/trash.svg"


export const Content = ({items, setItems, handleCheck, handleDelete}) => {
    // const [items, setItems] = useState(JSON.parse(localStorage.getItem("savelist")) || [] );

    // const [items, setItems] = useState([
    //     {
    //         id: 1,
    //         checked: true,
    //         item: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam in harum quis exercitationem, unde quisquam rerum. Harum, animi, suscipit.'
    //     },
    //     {
    //         id: 2,
    //         checked: true,
    //         item: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam in harum quis exercitationem, unde quisquam rerum. Harum, animi, suscipit unde necessitatibus quos ea itaque sunt maiores asperiores similique ullam velit.'
    //     },
    //     {
    //         id: 3,
    //         checked: false,
    //         item: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam in harum quis exercitationem, unde quisquam rerum. Harum, animi, suscipit unde necessitatibus quos ea itaque sunt maiores.'
    //     },
    //     {
    //         id: 4,
    //         checked: true,
    //         item: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam in harum quis exercitationem.'
    //     },
    // ]);
    // console.log(items)


    const number = [1, 2, 3, 4, 5];
    // console.log(...number);
    // console.log(...items)




    // const handleCheck = (id) => {
    //     const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
    //     setItems(listItems);

    //     localStorage. setItem("savelist", JSON.stringify(listItems));
    // }

    // const handleDelete = (id) => {
    //     const listItems = items.filter((item) => item.id !== id);
    //     setItems(listItems);
    // }

    return (
        <main className="content">
            <h2 id="Text">Content</h2>
            {items.length ? (
                <ul>
                {items.map((item) => (
                    <li className="item" key={item.id}>
                        <input type="checkbox" 
                        checked={item.checked}
                        onChange={() => handleCheck(item.id)} 
                        />
                        <label
                        style={(item.checked) ? {textDecoration: "line-through"} : null}
                        onDoubleClick={() => handleCheck(item.id)}> {item.item}</label>

                        {/* <img role="button" onClick={() => handleDelete(item.id)} src="https://www.svgrepo.com/show/476014/trash.svg" className="trash" alt="trash" /> */}
                        <button className="button-trash" onClick={() => handleDelete(item.id)}>
                            <img className="trash" src="images/trash.svg" alt="delete" />
                        </button>
                    </li>
                    
                ))}
            </ul>
            ) : (
                <p>Your list empty</p>
            )}
            
            <p className="Text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, esse temporibus distinctio voluptatem exercitationem minima ipsum eveniet. Consectetur, blanditiis iusto! Sunt ipsam maiores assumenda qui magni voluptatem consequuntur perferendis est!</p>
            <h3 className="h3">Super-puper</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nam exercitationem voluptas placeat quasi dignissimos?</p>
        </main>
    );
}


const products = [
    {
        name: "Sumsung",
        price: 600
    },
    {
        name: "Ipone 14",
        price: 900
    },
    {
        name: "Iphone 15",
        price: 1200
    },
    {
        name: "Iphone 16",
        price: 1400
    },
]


const newProducts = products.filter(item => item.price > 1000);
console.log(newProducts);

const words = ["apple", "banana", "orange", "kiwi", "g"]
const Newwords = words.filter(item => item.length < 5);
console.log(Newwords);
let Upperwords = Newwords.map(word => word.toUpperCase());
console.log(Upperwords);

let numbers = [1, 2, 3, 4, 5];
const NewNumbers = numbers.map(num => num*2);
console.log(NewNumbers)