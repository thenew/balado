import React from 'react'
import { FormattedMessage } from 'react-intl';
import s from './header.styl'
import { Link } from 'react-router-dom'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as AppActionCreators from 'Src/redux/actions/actions'


class Header extends React.Component {

    constructor(props) {
        console.log("%c Header ", 'background: #000; color: #ffff00; padding: 1px 0;');
        console.log("Header props: ", props);
        super(props)

        const {dispatch} = props;


        this.boundActionCreators = bindActionCreators(AppActionCreators, dispatch)
        console.log(this.boundActionCreators)

        // props.locale = store.getState('locale')


        this.change = this.change.bind(this);
    }

    change() {
        let value = document.querySelector('#lang').value
        console.log("value: ", value);

        console.log("this.props: ", this.props);

        // Injected by react-redux:
        let { dispatch } = this.props

        // calling a function that creates an action
        // and dispatch the action
        let action = AppActionCreators.setLocale(value)
        dispatch(action)
    }

    render() {
        let locale = this.props.locale

        return (
            <header className={s.header}>
                <div className="wrap">
                    <h2 className={s.logo}>․◉﹒∙◦○•</h2>
                    <ul className={s.menu}>
                        <li className={s.menuItem}>
                            <Link to="/">
                                <FormattedMessage 
                                    id="menu.home"
                                    defaultMessage="Home"
                                    description="Home link"
                                />
                            </Link>
                        </li>
                        <li className={s.menuItem}><Link to="/podcast/1">Podcast</Link></li>
                        <li className={s.menuItem}>
                            <Link to="/about">
                            <FormattedMessage id="menu.about" defaultMessage="About" />
                            </Link>
                        </li>
                        <li>
                            <select name="" id="lang" value={locale} onChange={this.change}>
                                <option value="" disabled selected>Select</option>
                                <option value="fr-FR">FR</option>
                                <option value="en-US">EN</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}

// Map state to Header components
function mapStateToProps(state, ownProps) {
    return {
        locale: state.i18n.locale,
    }
}

function mapDispatchToProps(dispatch) {
    // return {actions: bindActionCreators(attendanceRecordActions, dispatch)
    return {}
}

export default connect(mapStateToProps)(Header)