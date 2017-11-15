// The imports below are the files needed to make Grid.js work.
import React, { Component } from 'react';


class Grid extends Component {
    render() {
        return(
            <article>
                <section>
{/* This makes the image a link that goes to the url in the Reddit Data */}
                  <a href={this.props.post.data.url}><img className="Image" src={this.props.post.data.thumbnail}/></a>
                </section>
            </article>
        );
    }
}

export default Grid;
