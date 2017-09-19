import React from 'react';
import * as s from './toolbar.css';

export class Toolbar extends React.Component {

  render() {
    return (
      <div className={s.container}>
        <div>
          7 movies found
        </div>
        <div className={s.row}>
          Sort By
          <div>
            release date
          </div>
          <div>
            rating
          </div>
        </div>
      </div>
    )
  }
}