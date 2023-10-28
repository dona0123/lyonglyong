import "./Body.css";

function Body({name, school, favorList, children}) {
    console.log(name, school, favorList, children);
  const boolA = true;
  const boolB = false;
  const objA = {
    a: 1,
    b: 2,
  };
  const num = 9;

  return (
    <div>
      <body className="body">
        <h1>{name}은 {school}에 다닙니다.</h1>
        {children}
        <br />
        {favorList.length}개의 음식을 좋아합니다.
        <h2>{String(boolA || boolB)}</h2>
        <h2>a: {objA.a}</h2>
        <h2>b: {objA.b}</h2>
        <h2>{num}은(는) {num % 2 === 0 ? "짝수" : "홀수"}입니다.</h2>
      </body>
    </div>
  );
}

Body.defaultProps = {
    favorList : [],
}; 

export default Body;
