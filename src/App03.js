import cx from 'classnames';
import { Component } from 'react';

export default class LikeButton extends Component {
constructor() {
    super();
 
  this.state = {
      count: 100,
      liked: false
    };

  }

  updateCount = () => {
    const { liked, count} = this.state;

      this.setState({
        liked: liked ? false : true, 
        count:  liked ? count - 1 : count + 1,
      });
      
  }

render() {
    const isLiked = this.state.liked ? "liked": "like-button";
        return (
          <div>

                <button className={ isLiked } onClick={this.updateCount}>
                    Like | {this.state.count}
                </button>
                <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                        font-size: 1rem;
                        padding: 5px 10px;
                   `}
                }</style>
            </div>
        );
    }
}