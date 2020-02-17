import React from 'react'
import classes from './ProductDetails.module.css'
import ProductData from './ProductData'
const ProductDetails = (props) => {
    //console.log(props.data)
    const colorOptions = props.data.colorOptions.map((item, pos) => {
        const classArr = [classes.select]
        if (pos === props.previewpos) {
            classArr.push(classes.selected)
        }
        return (
            <img key={pos} src={item.imageUrl} className={classArr.join(" ")} alt={item.styleName} onClick={() => props.colorOptionsClick(pos)} />
        );
    })
    const features = props.data.featureList.map((item, pos) => {
        const featureArr = [classes.features]
        if (pos === props.backchange) {
            featureArr.push(classes.highlight)
        }
        return (
            <button key={pos} className={featureArr.join(' ')} onClick={() => props.heartBeatchange(pos)}>{item}</button>
        )
    })
    return (
        <div class={classes.contentdisplay}>
            <p className={classes.title}>{props.data.title}</p>
            <p style={{
                marginLeft: "10px"
            }}>{props.data.description}</p>
            <p style={{
                fontSize: "25px",
                fontWeight: "500",
                marginLeft: "10px"
            }}>Select Color</p>
            <div>
                {colorOptions}
            </div>
            <div class={classes.featureList}>
                <h3 style={{
                    fontSize: "25px",
                    fontWeight: "500",
                    marginLeft: "10px"
                }}>Features</h3>
                {features}
                <button class={classes.special}>BuyNow</button>
            </div>
        </div >
    );
}

export default ProductDetails