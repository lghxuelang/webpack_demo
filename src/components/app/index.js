import React, {useEffect} from "react";
import ReactDom from "react-dom";
import html1 from './app.html';
import Obj from './obj';

import "./index.less";

const App = ({ title }) => {
  useEffect(()=>{
    console.log(html1);
  },[]);

  const testSingleObj =()=>{
    const obj = new Obj();
    console.log(obj);
    obj.say();
  }

  return <div className="wrap">{title}
    {html1}
    <button onClick={testSingleObj}>点我看1</button>
    <button onClick={testSingleObj}>点我看2</button>
  </div>;
};

export default App;