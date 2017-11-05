import React from 'react';
import s from './toolbar.css';

export class Toolbar extends React.Component {

  handleClick(order) {
    this.props.onSortClick(order);
  }

  render() {
    return (
      <div className={s.container}>
        <div>
          {this.props.count} movies found
        </div>
        <div className={s.row}>
          Sort By
          <div className={this.props.sortBy === 'release' ? s.selected : ''} onClick={() => this.handleClick('release')}>
            release date
          </div>
          <div className={this.props.sortBy === 'rating' ? s.selected : ''} onClick={() => this.handleClick('rating')}>
            rating
          </div>
        </div>
      </div>
    )
  }
}