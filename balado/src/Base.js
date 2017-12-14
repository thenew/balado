import React from 'react'
import {TweenMax, Power2} from "gsap";

export default class Base extends React.Component {
    constructor(props) {
        super(props);
    }

    // invoked immediately before mounting occurs, before render()
    componentWillMount() {
    }

    // invoked immediately after a component is mounted
    componentDidMount() {

        setTimeout(() => {
            TweenMax.to(this.main, 1, {opacity: 1});
        }, 600);
    }
    
    // invoked immediately before a component is unmounted and destroyed
    componentWillUnmount() {
    }

}