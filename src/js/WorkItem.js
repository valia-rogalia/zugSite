import React, { Component } from 'react';
import $ from 'jquery'

class WorkItem extends Component {
  constructor() {
    super();

    this.state = {isActive: false}
  }

  handleClick() {
    $(".works_item_active").removeClass("works_item_active");
    this.state.isActive ? this.setState({isActive: false}) : this.setState({isActive: true})
  }

  render() {
    return (
      <li onClick={this.handleClick.bind(this)} className={this.state.isActive ? "works_item works_item_active" : "works_item"}>
        <img src={this.props.src} alt={this.props.src} />
        <div>
          <span>{this.props.span}</span>
        </div>
      </li>
    );
  }
}

export default WorkItem
