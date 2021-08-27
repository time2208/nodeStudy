//import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import Button from './Button';
import Display from './Display';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      number:0
    }
    //강제로 this 지정 (일반적 함수)
    //this.onClickHandlrt = this.onClickHandlrt.bind(this);
  }
  /*
  onClickHandlrt(payload){
    console.log('click');
    this.setState({ number: this.state.number + payload});
  }
  */
 //에로우 함수 사용시 강제로 this 지정을 하지 않아도 된다.
  onClickHandlrt = (payload) => {
    this.setState({ number: this.state.number + payload });
  }
  render(){
    return(
      <div className="App">
        <Display value = {this.state.number}/>
        <Button clickHandler={()=>this.onClickHandlrt(1)}>증가버튼</Button>
        <Button clickHandler={() => this.onClickHandlrt(-1)}>감소버튼</Button>
        <button onClick={() => this.onClickHandlrt(1)}>증가</button>
        <button onClick={() => this.onClickHandlrt(-1)} >감소</button>
      </div>
    )
  }
}
export default App;
