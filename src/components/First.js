import React from 'react'
import bg from './../bg.jpg'

function First() {
    return (
        <div className='maindiv'>
            <img src={bg} width="bg-fluid" className='bg-image' />
            <h5 className='header'> W E E K L Y <br /> N E W S P A P E R S</h5>
            <div class="card-body">
                <h5 class="card-title">Build Your Body <br /> & Keep Healthy</h5>
                <br />
                <br />
                <p class="card-text">Being healthy and fit increases our energy level, improves confidence, <br />burns calories, minimizes complications of chronic diseases and increases life term. <br />Our health and fitness is related to the many health benefits such as: <br />Decreases risk of Type-2 diabetes. <br />Decreases risk of hypertension and high cholesterol level.</p>
                <h5 className='footer'> See More </h5>
            </div>
            <h5 className='first-footer-1'> H E R E ' S  T H E P A C K A G E </h5>
        </div>
    )
}

export default First