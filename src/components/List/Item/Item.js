import React from 'react'

const item = (props) => (
    <li className="list-group-item d-flex">
        {props.content}
        <div className="ml-auto">
            <button 
                onClick={props.clicked.bind(this)} 
                className="btn btn-sm btn-danger">x</button>
        </div>
    </li>
);

export default item