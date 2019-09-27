import React, { Component } from 'react';
import './style.css';

export default class ScrollButton extends Component {
  constructor() {
    super();
    this.state = {
      section: 1,
    };
    this.click = this.click.bind(this);
  }

  click() {
    const { section } = this.state;
    if (section < 4) {
      window.scrollTo(0, section * 500);

      this.setState({
        section: section + 1,
      });
    }
  }

  render() {
    return (
      <div className="button" role="button" tabIndex={0} onClick={() => {}} onKeyUp={this.click}>
        <div className="arrow" />
      </div>
    );
  }
}
