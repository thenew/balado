import React from 'react';

export default class Icon extends React.PureComponent {
  render() {
    const {id} = this.props

    // get attribute from props
    let inputProps = {
      className: undefined,
      ...this.props
    };
    inputProps.id = undefined
    
    return (
      <svg {...inputProps} >
        <use xlinkHref={`#${id}`} />
      </svg>
    );
  }
}