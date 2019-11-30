import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {updateUser} from "./redux/actions";

function App(props) {
  console.log(props)
  return (
    <div className="App">
    <p>{props.user}</p>
    <button onClick={() => props.updateUser('KEJ')}>액션 Dispath</button>
    </div>
  );
}
//기존 라이브러리
const mapStateToProps = (state) => ({
  //왼쪽 props, 오른쪽 store의 state
  products: state.products,
  user: state.user
})

//(action을 dispath하는)펑션을 props로 매핑
const mapActionToProps = (dispatch) => ({
  //왼쪽 props, 오른쪽 펑션
  updateUser: (name) => dispatch(updateUser(name)) //액션을 dispath
})

// 문법: 커링, 개념: HoC : 입력파라메터에 컴포넌트를 넣어서 새로운 기능의 컴포넌트를 리턴하는 펑션
// connect(mapStateToProps, null)(App)

//curring 펑션
// const arrow3 = (a) => (b) => (c) => a+b+c;
// console.log(arrow3(1)(2)(3));

// export default App;
export default connect(mapStateToProps, mapActionToProps)(App)