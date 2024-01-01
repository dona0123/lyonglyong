import { useReducer } from "react";

function reducer(state, action) {
  //state : 현재 State 값이 저장, action : dispatch의 action객체 전달
  switch (action.type) {
    case "INCREASE":
      return state + action.data; //기존 State에 action객체의 data 값을 더해 반환
    case "DECREASE":
      return state - action.data; //기존 State에 action객체의 data 값을 빼서 반환
    case "INIT": //초기화 상태 추가하기
      return 0;
    default:
      return state;
  }
}

function TestComp() {
  const [count, dispath] = useReducer(reducer, 0);

  return (
    <div>
      <h4>테스트 컴포넌트</h4>
      <div>
        <bold>{count}</bold>
      </div>
      <div>
        <button onClick={() => dispath({ type: "INCREASE", data: 1 })}>
          +
        </button>
        <button onClick={() => dispath({ type: "DECREASE", data: 1 })}>
          -
        </button>
        <button onClick={() => dispath({ type: "INIT" })}>0으로 초기화</button>
      </div>
    </div>
  );
}

export default TestComp;
