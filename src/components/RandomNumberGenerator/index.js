// Write your code here
import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generatenum = () => {
    this.setState(() => {
      const num = Math.ceil(Math.random() * 100)
      return {number: num}
    })
  }

  render() {
    const {number} = this.state
    return (
      <div className="cardContainer">
        <h1 className="heading">Random Number</h1>
        <p className="instructions">
          Generate A Random Number in The Range Of 0 To 100
        </p>
        <div className="Generate">
          <button className="but" type="button" onClick={this.generatenum}>
            Generate
          </button>
        </div>
        <p className="heading">{number}</p>
      </div>
    )
  }
}

export default RandomNumberGenerator
