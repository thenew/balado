import React from 'react'

import s from './home.styl'
import Base from '../../Base'
import CardList from 'Components/card-list/CardList'
import Filters from 'Components/filters/Filters'

export default class Home extends Base {
  constructor(props) {
    super(props)
    this.filterList = this.filterList.bind(this)
  }

  componentDidMount() {
    this.filterList()
  }

  componentWillReceiveProps(props) {
    this.props = props
    this.filterList()
  }

  filterList() {
    if (this.props.match.params.slug) {
      const newList = data.filter((item) => {
        return item.category_id === this.props.match.params.slug
      })
      this.setState({
        items: newList
      })
    }
  }

  render() {
    return (
      <div className={'view ' + s.view}>
        <div className='wrap'>
          <Filters {...this.props.match.params} />
          <CardList />
        </div>
      </div>
    )
  }
}
