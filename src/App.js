import React from 'react';
import './components/Child';
import './style.css'; 
import Child from './components/Child';

class App extends React.Component{
render(){
  return  <div>
          <Child></Child>
          </div>
}
}

export default App;