import "./Body.css";
import { useState, useRef } from "react"; 

// state로 숫자 변화시키기 
function Viewer({number}){
  return <div>{number % 2 === 0 ? <h3>짝수</h3> : <h3>홀수</h3>}</div>;
}

function Body({name, school, favorList, children}) {
  console.log("Update!");

  // prop 전달하기 
  console.log(name, school, favorList, children);
  const boolA = true;
  const boolB = false;
  const objA = {
    a: 1,
    b: 2,
  };
  const num = 9;

  // 이벤트 함수 
  function handleOnClick(e){
    console.log(e);
    console.log(e.target.name)
  }

  // state로 숫자 변화시키기 
  const [number, setNunber] = useState(0);
  const onIncrease = () => {
    setNunber(number+1);
  };
  const onDecrease = () => {
    setNunber(number-1);
  }; 

  // input으로 텍스트 입력받기, ref 사용하기 
  const [text, setText] = useState("");
  const textRef = useRef();

  const handleOnChange1 = (e) => {
    setText(e.target.value); 
  }; 

  const handleOnClick5 = () => {
    if(text.length<5){
      textRef.current.focus();
    } else {
      alert(text); 
      setText("");
    }
  };

  // input으로 날짜 입력받기
  const [date, setDate] = useState("");
  const handleOnChange2 = (e) => {
    console.log("변경된 값: ", e.target.value);
    setDate(e.target.value);
  };

  // 드롭다운으로 옵션 선택하기
  const [option, setOption] = useState("");
  const handleOnChange3 = (e) => {
    console.log("변경된 값: ", e.target.value);
    setOption(e.target.value);
  }

  // 객체로 여러 사용자 입력받기 
  const [state, setState] = useState({
    name: "",
    gender: "",
    birth: "",
    bio: "",
  }); 

  const handleOnChange4 = (e) => {
    console.log("현재 수정 대상: ", e.target.name);
    console.log("수정값: ", e.target.value);
    setState({
      ...state, 
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <body className="body">

        {/* prop 전달하기 */}
        <h1>{name}은 {school}에 다닙니다.</h1>
        {children}
        <br />
        {favorList.length}개의 음식을 좋아합니다.
        <h2>{String(boolA || boolB)}</h2>
        <h2>a: {objA.a}</h2>
        <h2>b: {objA.b}</h2>
        <h2>{num}은(는) {num % 2 === 0 ? "짝수" : "홀수"}입니다.</h2>

        {/* 이벤트 함수 */}
        <button name="A버튼" onClick={handleOnClick}>A버튼</button>
        <button name="B버튼" onClick={handleOnClick}>B버튼</button>

        {/* state로 숫자 변화시키기  */}
        <div>
        <h2>{number}</h2>
        <Viewer number={number} />

        <div>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
        </div>
        </div>

        {/* input으로 텍스트 입력받기, ref 사용하기 */}
        <div>
          <input ref={textRef} value={text} onChange={handleOnChange1} />
          <button onClick={handleOnClick5}>작성 완료</button>
        </div>

        {/* input으로 날짜 입력받기 */}
        <div>
          <input type="date" value={date} onChange={handleOnChange2} />
        </div>

        {/* 드롭다운으로 옵션 선택하기 */}
        <div>
          <select value={option} onChange={handleOnChange3}>
            <option key={"1번"}>1번</option>
            <option key={"2번"}>2번</option>
            <option key={"3번"}>3번</option>
          </select>
        </div>

        {/* 객체로 여러 사용자 입력받기  */}
        <hr></hr>
        <div>
          <input
          name="name"
          value={state.name}
          onChange={handleOnChange4}
          placeholder="이름"
          />
        </div>
        <div>
          <select name="gender" value={state.gender} onChange={handleOnChange4}>
            <option key={""}></option>
            <option key={"남성"}>남성</option>
            <option key={"여성"}>여성</option>
          </select>
        </div>
        <div>
          <input
          name="birth"
          type="date"
          value={state.birth}
          onChange={handleOnChange4}
          />
        </div>
        <div>
          <textarea name="bio" value={state.bio} onChange={handleOnChange4} />
        </div>

      </body>
    </div>
  );
}

Body.defaultProps = {
    favorList : [],
}; 

export default Body;
