import React from "react";
import Pagination from './Pagination';
import Item from "./Item";
import './index.css';

class Onboarding extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentItem: 1,
      totalItems: 0,
    }

    this.handlePaginationClick = this.handlePaginationClick.bind(this);
  }

  handlePaginationClick(direction) {
    let nextItem = this.state.currentItem;

    // Increment nextPage if direction variable is next, otherwise decrement it
    nextItem = direction === 'next' ? nextItem + 1 : nextItem - 1;

    // Call function inside setState's callback
    // Because we have to make sure first page state is updated
    this.setState({ currentItem: nextItem }, () => {
      
    });
  }

  render() {
    const { currentItem, totalItems } = this.state;

    return (
      <div className="content">
        <Item
          currentItem={currentItem}
          totalItems={totalItems}
        />
        {/* <Item
          currentItem={currentItem}
          totalItems={totalItems}
        />
        <Item
          currentItem={currentItem}
          totalItems={totalItems}
        /> */}

        <Pagination
          currentItem={currentItem}
          totalItems={totalItems}
          handlePaginationClick={this.handlePaginationClick}
        />
        Place to add steps
      </div>
    );
      
  }
}

export default Onboarding;
