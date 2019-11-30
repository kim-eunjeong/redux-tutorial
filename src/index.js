import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";

// const reducer = () => {
// 	//State로 리턴하는 단순 reducer
// 	return 'State';
// }

const reducer = (state, action) => {
	if(action.type === 'changeState'){
		return action.payload;
	}
	return 'State';
}

// const store = createStore(reducer);
//redux devtools => window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store);
//Error: Expected the reducer to be a function.
//reducer함수가 필요하다.

//subvscribe(수신) dispath 가장 중요

console.log('CreateStore', store.getState()); //초기상태값인 State 반환

//1. subscribe
store.subscribe(() => console.log('subscribe:' , store.getState()));

//2. aciotn dispatch test => action 객체이며 type필수
const action ={
	type: 'changeState',
	payload: 'new State'
}

store.dispatch(action);

console.log('After dispatch', store.getState());
//reduce 함수를 변경하지 않았기때문에 초기상태인 State로 찍힘 => 변형로직을 해야한다
//reduce는 첫번째 state와 두번째 action 파라미터를 받아야한다. (순서 변경 불가)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
