import React, { Component } from 'react'
import styles from './Icon.module.css'
import Lock from './lock.svg'
import Mic from './mic.svg'
import Phone from './phone.svg'

export default class Icon extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.mobile}>
                    <div>
                        <div className={styles.time}>5:51 PM</div>
                        <img src={Lock} alt="lock image" className={styles.icon} />
                        <img src={Mic} alt="Mic image" className={styles.icon} />
                        <img src={Phone} alt="Phone image" className={styles.icon} />
                    </div>
                </div>
            </div>



        )
    }
}
