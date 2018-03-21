import React from "react";
import "./Search.css";


const Search = props => (
    <div className='search-panel'>
        <div className="panel panel-success">
            <div className="panel-heading">
                <div className="panel-title"><strong>Search</strong></div>
            </div>
            <form className='search-form'>

                <div className='form-search'>
                    <label className='search-topic'>Topic</label>
                    <input type='text' className='form-control' {...props} />
                </div>
            </form>
        </div>
    </div>

);


export default Search;

/* <div className='form-search'>
                    <label for='search'>Start Year</label>
                    <input type='text' className='yearStart-input' placeholder='year start search'></input>
                </div>
                <div className='form-search'>
                    <label for='search'>End Year</label>
                    <input type='text' className='yearEnd-input' placeholder='year end search'></input>
                </div> */