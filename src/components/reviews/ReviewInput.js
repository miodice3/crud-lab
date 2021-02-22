import React, { Component } from 'react';

class ReviewInput extends Component {

  state = {
    text: "",
    restId: this.props.restaurant.id
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e =>{
    e.preventDefault()
    this.props.addReview(this.state)
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>Add Review</label>
          <input type="text" value={this.state.text} onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;


// state = {
//   restaurants: [
//     {name: macs, id=1},
//     {name: wendys, id=2}
//   ],
//   reviews: [
//     {restID: 1, id:100, text: "great food"},
//     {restID: 1, id:101, text: "only good food"},
//     {restID: 2, id:102, text: "fries not so great"},
//   ]
// }

// state = {
//   restaurants: [
//     {name: macs, id=1, reviews: [
//       {restID: 1, id:100, text: "great food"},
//       {restID: 1, id:101, text: "only good food"}
//     ]},
//     {name: wendys, id=2, reviews: [
//       {restID: 2, id:102, text: "fries not so great"}
//     ]}
//   ]
// }