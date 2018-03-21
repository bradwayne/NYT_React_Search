import React from "react";
import "./ResultsList.css";


export const ResultsListItem = props => (
    <div className='results-panel'>
        <div className="panel panel-success">
            <div className="panel-heading">
                <div className="panel-title"><strong> {props.title} </strong></div>
            </div>
            <li className='list-group-item'>
                <h4> { props.body } </h4>
                <a rel="noreferrer noopener" target="_blank" href={ props.href }>Go to article!</a>
            </li>
        </div>
    </div>


);


export default ResultsListItem;

