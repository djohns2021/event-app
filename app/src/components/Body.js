import React, { Component } from 'react';

import 'styles/components/Body.css';

type props = {
  gp1: number,
  gp2: string
}

export default class Body extends Component {
  static displayName = 'Body';

  constructor(props) {
    super(props);
  };

  render(props) {
    return (
      <div id='Body'>
        <h1>Body</h1>
        <div>{this.props.gp1}</div>
        <div>{this.props.gp2}</div>
      </div>
    )
  }
}
