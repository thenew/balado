import React from 'react'
import s from './header.styl'
import { Link } from 'react-router-dom'

import {connect} from 'react-redux';  

export default class Header extends React.Component {

    constructor(props) {
        super(props)

        // props.locale = store.getState('locale')
    }

    render() {
        return (
            <header className={s.header}>
                <div className="wrap">
                    <h2>|/|/¦¦¦|/¦/¦|/|¦|/¦|¦||¦</h2>
                    <ul className={s.menu}>
                        <li className={s.menuItem}><Link to="/">Home</Link></li>
                        <li className={s.menuItem}><Link to="/podcast/1">Podcast</Link></li>
                        <li className={s.menuItem}><Link to="/about">About</Link></li>
                        <li className={s.menuItem}>{ this.props.locale }</li>
                        {/* <li>
                            <button></button>
                             { this.props.locale }</li> */}
                    </ul>
                </div>
            </header>
        );
    }
}


// function mapStateToProps(state, ownProps) {  
//     return {attendanceRecords: state.attendanceRecords}
//   }
  
//   function mapDispatchToProps(dispatch) {  
//     return {actions: bindActionCreators(attendanceRecordActions, dispatch)
  
//   export default connect(mapStateToProps, mapDispatchToProps)(ScheduleContainer); 