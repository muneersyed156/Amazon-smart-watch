import React from 'react';
import logo from './logo.svg';
import './App.css';
import amlogo from './amlogo.jpg'
import ProductData from './ProductData'
import Productpreview from './productpreview';
import ProductDetails from './ProductDetails';
class App extends React.Component {
  state = {
    ProductData: ProductData,
    previewImage: "https://imgur.com/iOeUBV7.png",
    previewpos: 0,
    showHeart: false,
    backchange: 0,
  }

  colorOptionsClick = (pos) => {
    const updatedimage = this.state.ProductData.colorOptions[pos].imageUrl
    console.log(updatedimage)
    this.setState({
      previewImage: updatedimage,
      previewpos: pos,
    })
  }

  heartBeatchange = (pos) => {
    if (pos === 0) {
      this.setState({
        showHeart: false,
        backchange: 0,
      })
    }
    else {
      this.setState({
        showHeart: true,
        backchange: 1,
      })
    }
  }
  render() {
    return (
      <div>
        <header className="header">
          <img src={amlogo} className="logo" />
        </header>
        <div>
          <Productpreview previewImage={this.state.previewImage} showHeart={this.state.showHeart} />
        </div>
        <div>
          <ProductDetails data={this.state.ProductData} colorOptionsClick={this.colorOptionsClick} previewpos={this.state.previewpos} heartBeatchange={this.heartBeatchange} backchange={this.state.backchange} />

        </div>
      </div >
    );
  }
}

export default App;
