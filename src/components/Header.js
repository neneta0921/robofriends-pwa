import React, { PureComponent } from 'react';

import CounterButton from './CounterButton';

class Header extends PureComponent {
  render() {
    return (
      <div>
        <h1 className='f1 ttu'>Neko Friends</h1>
        <CounterButton color={'red'} />
      </div>
    )
  }
}

export default Header;