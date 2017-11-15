// The imports below are the files needed to make Grid.js work.
import React, { Component } from 'react';


class Grid extends Component {
    render() {
      const post = this.props.post.data.childern
        return(
            <article>
                <section>
{/* This makes the image a link that goes to the url in the Reddit Data */}
                  <a href={post.data.url}><img className="Image" src={post.data.thumbnail}/></a>
                </section>
            </article>
        );
    }
}
// function mapStateToProps(state) {
//     return {
//         posts: state.posts
//     }
// }
export default Grid;
