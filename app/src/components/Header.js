import React, { Component } from 'react';

import 'styles/components/Header.css';

export default class Header extends Component {
  static displayName = 'Header';

  render(props) {
    return (
      <div id='Header'>
        <h1>Header</h1>
      </div>
    )
  }
}
