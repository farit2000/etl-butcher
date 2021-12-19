import React from 'react';
import * as d3 from 'd3'


class App extends React.Component {
 constructor(props){
    super(props);
    this.myRef = React.createRef(); 
 }
 componentDidMount() {
  d3.select(this.myRef.current)
  .append('p')
  .text('Hello from D3');
 }
 render(){
  return (
    <div ref={this.myRef}>
    </div>
  );
 }
 
}
export default App;