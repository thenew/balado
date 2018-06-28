import React from 'react'
import Card from 'Components/card/Card'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import s from './card-list.styl'

class CardList extends React.Component {

  render() {
    return (
      <ul className={s.cards}>
        {
          this.props.items.map(function(item) {
            return (
              <li className={s.card} key={item.id}>
                <Card {...item} />
              </li>
            )
          })
        }
      </ul>
    )
  }
}

/**
 * Filter items based on react router params
 */
const getFilteredItems = (items, params) => {
  let filteredItems = []
  let hasFilter = false
  for (const param in params) {

    if (!params[param] || params[param] === 'all') {
      continue
    }

    hasFilter = true

    items.forEach((item) => {
      if (item[param] === params[param]) {
        filteredItems.push(item)
      }
    })
  }

  if (!hasFilter) {
    filteredItems = items
  }

  return filteredItems
}

const mapStateToProps = (state, ownProps) => ({
  items: getFilteredItems(state.items, ownProps.match.params)
})

export default withRouter(connect(
  mapStateToProps
)(CardList))
