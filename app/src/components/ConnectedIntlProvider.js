import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'

// This function will map the current redux state to the props for the component that it is "connected" to.
// When the state of the redux store changes, this function will be called, if the props that come out of
// this function are different, then the component that is wrapped is re-rendered.
function mapStateToProps(state) {
  // console.log('%c mapStateToProps ', 'background: #000; color: #ffff00; padding: 1px 0;')
  return {
    locale: state.i18n.locale,
    messages: state.i18n.messages
  }
}

// export connected React Intl Provider
export default connect(mapStateToProps)(IntlProvider)
