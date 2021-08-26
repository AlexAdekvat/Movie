import React from 'react'
import puff from './../assets/loader.svg'
import styles from "./MoviePage.module.scss"

const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <img src={puff} alt="loader"/>
        </div>
    )
}
export default Preloader