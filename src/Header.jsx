import React from "react";
function Header({value}) {
    return(
        <header>
            <div className="header_inner">
                <ul className="inner">
                    <img src="https://www.flaticon.com/ru/free-icon/to-do-list_6811275" alt="spusok" />
                    <li><a className="link" href="#Home">Home</a></li>
                    <li><a className="link" href="#Text">Text</a></li>
                    <li><a className="link" href="#Footer">Footer</a></li>
                </ul>
            </div>
            <div className="main_header">
            <h1 id="Home">Header</h1>
            <p>Our {value} Items</p>
            </div>

        </header>
    );
}

export default Header;