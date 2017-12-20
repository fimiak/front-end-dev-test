import React, { Component } from 'react';
import slide_zero from './../assets/hero-img.jpg';
import slide_one from './../assets/iStock-503300108.jpg';
import slide_two from './../assets/iStock-613672992.jpg';

class Slider extends Component {
    constructor() {
        super();

        this.state = {
            slide: slide_zero
        }

        this.handleClickZero = this.handleClickZero.bind(this);
        this.handleClickOne = this.handleClickOne.bind(this);
        this.handleClickTwo = this.handleClickTwo.bind(this);
        this.toggleSlide = this.toggleSlide.bind(this);
    }

    handleClickZero() {
        this.setState({
            slide: slide_zero,
            zero: true,
            one: false,
            two: false
        })
        document.getElementsByClassName('zero-inactive')[0].classList.add('hide');
        document.getElementsByClassName('zero-active')[0].classList.remove('hide');
        document.getElementsByClassName('two-active')[0].classList.add('hide');
        document.getElementsByClassName('one-active')[0].classList.add('hide');
        document.getElementsByClassName('two-inactive')[0].classList.remove('hide');
    }

    handleClickOne() {
        this.setState({
            slide: slide_one,
            zero: false,
            one: true,
            two: false
        })
        document.getElementsByClassName('zero-inactive')[0].classList.remove('hide');
        document.getElementsByClassName('zero-active')[0].classList.add('hide');
        document.getElementsByClassName('one-active')[0].classList.remove('hide');
        document.getElementsByClassName('one-inactive')[0].classList.add('hide');
    }

    handleClickTwo() {
        this.setState({
            slide: slide_two,
            zero: false,
            one: false,
            two: true
        })
        document.getElementsByClassName('one-inactive')[0].classList.remove('hide');
        document.getElementsByClassName('one-active')[0].classList.add('hide');
        document.getElementsByClassName('two-active')[0].classList.remove('hide');
        document.getElementsByClassName('two-inactive')[0].classList.add('hide');
    }

    toggleSlide() {
        this.state.slide === slide_zero ? this.handleClickOne() : this.state.slide === slide_one ?this.handleClickTwo() : this.handleClickZero();
    }

    componentDidMount() {
        this.handleClickZero();
        setInterval(this.toggleSlide, 7000);
    }

    render() {
        return(
            <div className="slider">
                <div className="slider-image">
                    <img src={this.state.slide} alt="Slides" />
                </div>
                <div className="slider-text">
                    <h1>Lorem Ipsum Lorem Ipsum</h1>
                    <button>Button</button>
                </div>
                <div className="slider-buttons">
                    <ul>
                        <li onClick={this.handleClickZero} className="slide-zero">
                            <i className="fas fa-circle fa-xs zero-active"></i>
                            <i className="far fa-circle fa-xs zero-inactive"></i>
                        </li>
                        <li onClick={this.handleClickOne}>
                            <i className="fas fa-circle fa-xs one-active"></i>
                            <i className="far fa-circle fa-xs one-inactive"></i>
                        </li>
                        <li onClick={this.handleClickTwo}>
                            <i className="fas fa-circle fa-xs two-active"></i>
                            <i className="far fa-circle fa-xs two-inactive"></i>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Slider;