import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { clickCount: 0 };

  }

  render() {
    if (this.state.clickCount > 2 && this.state.clickCount <= 6) {
      return <button onClick={this.handleClick} className={ 'dark-purple' }>Hot Button</button>;

    } else if (this.state.clickCount > 6 && this.state.clickCount <= 9) {
      return <button className={'purple'} onClick={this.handleClick} >Hot Button</button>;
    } else if (this.state.clickCount > 9 && this.state.clickCount <= 12) {
      return <button className={'dark-pink'} onClick={this.handleClick} >Hot Button</button>;
    } else if (this.state.clickCount > 12 && this.state.clickCount <= 16) {
      return <button className={'orange'} onClick={this.handleClick} >Hot Button</button>;
    } else if (this.state.clickCount > 16 && this.state.clickCount <= 18) {
      return <button className={'yellow'} onClick={this.handleClick} >Hot Button</button>;
    } else if (this.state.clickCount > 18) {
      return <button className={'white'} onClick={this.handleClick} >Hot Button</button>;
    }
    return <button onClick={this.handleClick}>Hot Button</button>;
  }

  handleClick() {
    this.setState({ clickCount: this.state.clickCount + 1 });
  }

}

export default HotButton;
