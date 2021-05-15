import React from 'react';

class ToggleSwitch extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);

  }

  render() {
    if (this.state.isClicked === true) {
      return <div className= 'button-holder'>
        <div className= 'off'>
          <button className={'switchOff'} onClick={this.handleClick} ></button>

        </div>
        <p className='text'>OFF</p>
      </div>;

    } else {
      return <div className= 'button-holder'>
        <div className='on'>
          <button className={'switchOn'} onClick={this.handleClick} ></button>

        </div>
        <p className='text'>ON</p>
        </div>;

    }

  }

  handleClick() {
    if (this.state.isClicked === false) {
      this.setState({ isClicked: true });
    } else {
      this.setState({ isClicked: false });
    }
  }

}

export default ToggleSwitch;
