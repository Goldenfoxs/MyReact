import React, {useState} from "react";

import './App.css';
import { Content } from './Content';
import './Content.css';
import Header from './Header';
import './Header.css';
import { Footer } from './Footer';
// import  Web from './Web'

function App() {

const [items, setItems] = useState(JSON.parse(localStorage.getItem("savelist")) || [] );
const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
        setItems(listItems);

        localStorage. setItem("savelist", JSON.stringify(listItems));
    }
const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
    }

    const value = 10
  return (
    <div className="App">
      <Header value={value}/>
      <Content 
      items={items}
      setItems={setItems}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
      {/* <Web /> */}
      <Footer 
      length={items.length}
      />
    </div>
  );
}

export default App;
