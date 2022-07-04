import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import store from '../store';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: store.getState().app.count
    };
   // this.state = {isToggleOn: true};

    this.addone = this.addone.bind(this);
  }
 addone= () =>{
  this.setState({ count: this.state.count + 1 })

    store.dispatch({type:'INCREMENT'})
  }
 // const [count, setCount] = useState(0);
  render() {
    return (
    <div>
        <Link to="/">
      Home
    </Link>
    



    <div>
      {this.state.count}
      <button onClick={this.addone}>add</button>
    hi from about component

    </div>

    </div>
    
    );
  }
}

export default connect(
  state=>({

  }),
  {}
)(App)
