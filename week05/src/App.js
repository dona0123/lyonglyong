import "./App.css";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

function ChildComp(){
  return <div>Child Component</div>
}

function App() {
  const BodyProps = {
     name : "롱롱",
     school : "덕성",
     favorList : ["파스타", "빵", "떡복이"],
  }
 

  return (
  <div className="App">
    <Header/>
    <Body {...BodyProps}>
      <ChildComp />
    </Body>
    <Footer/>
  </div>
  );
}

export default App;
