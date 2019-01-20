import React from 'react'

const todoForm = (props) => (
    <div className="input-group mb-0">
        <input onChange={props.content} type="text" className="form-control" placeholder="e.g. Clean Toilet" />
        <div className="input-group-append">
            <button onClick={props.clicked} className="btn btn-outline-primary" type="button">Add</button>
        </div>
    </div>
  );

export default todoForm
