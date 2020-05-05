import cx from 'classnames';
import { Component } from 'react';

export default class Counter extends Component {
    constructor() {
    super();
    this.state = {
      count: 42,
    };
  }

updateCount = () => {
    this.setState({
     count: this.state.count + 1 }
    );
}

render() {
        return (
            <div>
                <h2 className="counter">{this.state.count}</h2>
                <button className="counter-button" onClick={this.updateCount}>
                    Click
                </button>
                <style>{ `
                      .counter-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                     ` }
                }</style>
            </div>
        );
    }
}