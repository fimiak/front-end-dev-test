import React from 'react';
import envelope from './../assets/envelope-icon.svg';
import mobile from './../assets/img1.jpg';
import analytics from './../assets/img2.jpg';
import page from './../assets/page-icon.svg';
import Slider from './Slider';

function Landing() {
    return(
        <div className="landing">
            <div className="hero">
                <Slider />
                <div className="mail">
                    <img src={envelope} alt="" />
                </div>
            </div>
            <div className="pages">
                <ul>
                    <li><img src={page} alt="" />Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitae lectus cursus.</li>
                    <li><img src={page} alt="" />Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitae lectus cursus.</li>
                    <li><img src={page} alt="" />Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitae lectus cursus.</li>
                    <li><img src={page} alt="" />Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitae lectus cursus.</li>
                </ul>
            </div>
            <div className="slanted">
                <h3>Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitae lectus cursus. Purus libero amet, at dui, tincidunt nunc vestibulum in justo, a faucibus ipsum hendrerit semper ipsum ac.</h3>
            </div>
            <div className="section-header"><span>Lorem</span> Ipsum</div>
            <div className="call-to-action">
                <div className="action-row">
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div className="action-button">
                        <button>Button</button>
                    </div>
                </div>
                <ul className="percents">
                    <li>
                        <h1>240%</h1>
                        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum dolor</p>
                    </li>
                    <li>
                        <h1>105%</h1>
                        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum dolor</p>
                    </li>
                    <li>
                        <h1>159%</h1>
                        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum dolor</p>
                    </li>
                </ul>
            </div>
            <div className="section-header"><span>Lorem</span> Ipsum</div>
            <div className="tiles">
                <div className="text tiles-box">
                    <div>
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <h3>Lorem ipsum dolor sit amet lorem</h3>
                        <p>Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitae lectus cursus. Purus libero amet, at dui, tincidunt nunc vestibulum in justo, a faucibus ipsum hendrerit semper ipsum. Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitae lectus cursus. Purus libero amet, at dui, tincidunt nunc vestibulum in justo, a faucibus ipsum hendrerit semper ipsum ac.</p>
                    </div>
                </div>
                <img className="tiles-box" src={mobile} alt="" />
                <img className="tiles-box" src={analytics} alt="" />
                <div className="text tiles-box">
                    <div>
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <h3>Lorem ipsum dolor sit amet lorem</h3>
                        <p>Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitae lectus cursus. Purus libero amet, at dui, tincidunt nunc vestibulum in justo, a faucibus ipsum hendrerit semper ipsum. Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitae lectus cursus. Purus libero amet, at dui, tincidunt nunc vestibulum in justo, a faucibus ipsum hendrerit semper ipsum ac.</p>
                    </div>
                </div>
            </div>
            <div className="landing-footer">
            </div>
        </div>
    )
}

export default Landing;