import React from "react";
import "./Header.css";


const Header = () => (
    <div className='main-container'>
        <div className='panel header'>
            <div className='panel-heading'>
                <h1 className='fa fa-newspaper-o'><strong> New York Times Search</strong></h1>
                <h3 className='subText'>Search for articles of interest</h3>
            </div>
        </div>
    </div>
);


export default Header;
