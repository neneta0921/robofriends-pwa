import React, { PureComponent } from 'react';

class Header extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  // }

  render() {
    console.log('Header');
    return <h1 className='f1 ttu'>Neko Friends</h1>
  }
}

export default Header;