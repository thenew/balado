import React from 'react'

export default class Icon extends React.PureComponent {
  render() {
    const {id} = this.props

    // get attribute from props
    const inputProps = {
      className: id,
      ...this.props
    }
    inputProps.id = undefined

    return (
      <svg {...inputProps} >
        <use href={`#${id}`} />
      </svg>
    )
  }
}
