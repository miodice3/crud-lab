import React, { Component } from 'react';


class RestaurantInput extends Component {

  state = {
    text: ""
  }
  
  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ""
    })
  }

  handleChange = (e) =>{
    this.setState({
      text: e.target.value
    })
  }
  
  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={this.handleOnSubmit}>
          <input onChange={this.handleChange} type="text" value={this.state.text}/>
          <input type="submit"/>
        </form>
        
      </div>
    );
  }
};

export default RestaurantInput;