import React, { Component } from 'react'
import styles from './Icon.module.css'
import Image from './Image.js'
import Lock from './lock.svg'
import Mic from './mic.svg'
import Phone from './phone.svg'

export default class Data extends Component {
    render() {
        return (
            <div className={styles.base}>
                <div className={styles.container}>
                    <div>
                        <div className={styles.time}>10:55 AM</div>
                        <div className={styles.icon}>
                            <Image src={Lock} alt="lock image" />

                            <Image src={Mic} alt="mic image" />

                            <Image src={Phone} alt="phone image" />
                        </div>
                    </div>
                </div>
            </div>



        )
    }
}
