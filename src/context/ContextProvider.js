import React, {Component} from 'react'
import Context from './Context'

class ContextProvider extends Component{

    state = {
        todo: null,
    }
    componentDidMount(){
        
    }
    render(){
        return (
           <Context.Provider value={this.state.todo}>
               {this.props.children}
           </Context.Provider>
        )
    }
}

export default ContextProvider
