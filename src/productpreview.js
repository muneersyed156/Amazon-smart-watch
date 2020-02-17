import React from 'react'
import './App.css'
import ProductData from './ProductData'
import classes from './productpreview.module.css'
const Productpreview = (props) => {
    const ht = new Date().getHours() < 9 ? `0${new Date().getHours()}` : new Date().getHours()
    const hm = new Date().getMinutes() < 9 ? `0${new Date().getMinutes()}` : new Date().getMinutes()
    console.log(props.showHeart)
    return (
        <div>
            <img src={props.previewImage} class={classes.imagedisplay} alt="Blackcolor" />
            {
                props.showHeart ? <div className={classes.heart}>
                    <i class="fas fa-heartbeat"></i>
                    <p style={{ color: "white", fontSize: "30px" }}>78</p>
                </div> : <div className={classes.time}>
                        <p style={{ color: "white", fontSize: "30px" }}>{`${ht}:${hm}`}</p>
                    </div>

            }

        </div>
    );
}

export default Productpreview