import React, { Component, Fragment } from 'react';

import CardList from './CardList';
import Header from './Header';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';

import './MainPage.css';

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    const { robots, searchField } = this.props;
    return robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
  }

  render() {
    const { onSearchChange, isPending } = this.props;

    return (
      <Fragment>
        <div className='tc'>
          <Header className='header' />
          <SearchBox searchChange={onSearchChange}/>
        </div>
        <Scroll>
          { isPending ? <h1>Loading</h1> :
            <ErrorBoundry>
              <CardList robots={this.filterRobots()} />
            </ErrorBoundry>
          }
        </Scroll>
      </Fragment>
    );
  }
}

// action done from mapDispatchToProps will channge state from mapStateToProps
export default MainPage
