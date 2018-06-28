import React from 'react'
import { FormattedMessage } from 'react-intl'
import s from './header.styl'
import { Link } from 'react-router-dom'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as AppActionCreators from 'Src/redux/actions/actions'

class Header extends React.Component {

  constructor(props) {
    // console.log('%c Header ', 'background: #000; color: #ffff00; padding: 1px 0;')
    // console.log('Header props: ', props)
    super(props)

    const {dispatch} = props

    this.boundActionCreators = bindActionCreators(AppActionCreators, dispatch)
    // console.log(this.boundActionCreators)

    // props.locale = store.getState('locale')

    this.change = this.change.bind(this)
  }

  change() {
    const value = document.querySelector('#lang').value
    // console.log('value: ', value)

    // console.log('this.props: ', this.props)

    // Injected by react-redux:
    const { dispatch } = this.props

    // calling a function that creates an action
    // and dispatch the action
    const action = AppActionCreators.setLocale(value)
    dispatch(action)
  }

  render() {
    const locale = this.props.locale

    return (
      <header className={s.header}>
        <div className='wrap'>
          <h2 className={s.logo}>․◉﹒∙◦○•</h2>
        </div>
        <div hidden>
          <Link to='/about'>
            <FormattedMessage id='menu.about' defaultMessage='About' />
          </Link>
        </div>
        <div hidden>
          <select name='' id='lang' value={locale} onChange={this.change}>
            <option value='' disabled selected>Select</option>
            <option value='fr-FR'>FR</option>
            <option value='en-US'>EN</option>
          </select>
        </div>
      </header>
    )
  }
}

// Map state to Header components
function mapStateToProps(state, ownProps) {
  return {
    locale: state.i18n.locale
  }
}

export default connect(mapStateToProps)(Header)
