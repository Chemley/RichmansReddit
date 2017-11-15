import React, { Component } from 'react';
import { connect } from 'react-redux';



class List extends Component {
  render () {
    return (
      <div className="List">
          <div className="Text">
            <a className="title" href={this.props.post.data.url}><h3>{this.props.post.data.title}</h3></a>
            <p className= "author">{this.props.post.data.author}</p>
          </div>
        <img className= "image" src={this.props.post.data.thumbnail} atl="thumbnail"/>
      </div>
    );
  }
}

export default List;
