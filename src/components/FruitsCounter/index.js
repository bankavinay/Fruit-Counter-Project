import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    bananasCount: 0,
    mangoesCount: 0,
  }

  onClickEatBanana = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  onClickEatMango = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.stategit

    return (
      <div class="app-container">
        <div class="fruits-counter">
          <h1 class="count-text">
            Bob ate <span class="count">{mangoesCount}</span> mangoes
            <span class="count"> {bananasCount}</span> bananas
          </h1>
          <div class="counters-control-container">
            <div class="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="banana"
                class="fruit-image"
              />
              <div class="button-container">
                <button
                  type="button"
                  class="button"
                  onClick={this.onClickEatMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div class="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                class="fruit-image"
              />
              <div class="button-container">
                <button
                  type="button"
                  class="button"
                  onClick={this.onClickEatBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
