import React, { Component } from 'react'
import Item from './Item/Item'

export default class List extends Component {

  render() {

    let items = this.props.value.map(
        (val, i) => {
            return <Item 
                    content={val.content} 
                    key={i} clicked={this.props.remove.bind(this, i)}/>
        }
    );
    items = items.length > 0 ? items : "Empty todo";

    return (
      <ul className="list-group">
        {items}
      </ul>
    )
  }
}

