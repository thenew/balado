import React from 'react';

export default class Icon extends React.Component {
  render() {
    return (
      <svg>
      <use xlinkHref={`#${this.props.id}`} />
      </svg>
    );
  }
}