import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Todo from "./components/Todo";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
      
        <Header />
        <Todo />
        <Footer />
      </>
    );
  }
}

export default App;
