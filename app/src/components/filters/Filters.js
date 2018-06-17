import React from 'react'
import s from './filters.styl'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

export default class Filters extends React.Component {

  urlBuilder(data) {
    const filters = {}

    const filtersKeys = [
      'genre',
      'theme',
      'format'
    ]

    filtersKeys.forEach((key) => {
      filters[key] = data[key] || this.props[key] || 'all'
    })

    let url = ''
    for (const key in filters) {
      url += '/' + key + '/' + encodeURIComponent(filters[key])
    }
    return url
  }

  render() {

    return (
      <div className={s.filters}>
        Format:
        <Link className={s.filtersItem} to={this.urlBuilder({format: 'all'})}>
          <FormattedMessage id='filters.format0' defaultMessage='All' />
        </Link>
        <Link className={s.filtersItem} to={this.urlBuilder({format: 'short'})}>
          <FormattedMessage id='filters.format1' defaultMessage='Short' />
        </Link>
        <Link className={s.filtersItem} to={this.urlBuilder({format: 'medium'})}>
          <FormattedMessage id='filters.format2' defaultMessage='Medium' />
        </Link>
        <Link className={s.filtersItem} to={this.urlBuilder({format: 'long'})}>
          <FormattedMessage id='filters.format3' defaultMessage='Long' />
        </Link>
      </div>
    )
  }
}
