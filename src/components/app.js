import React,{Component} from 'react'
import '../style.css'
import Header from './header/header'
import Showcase from './showcase/showcase'

class App extends Component{
  render(){
    return (<div>
      <Header></Header>
      <Showcase></Showcase>
    </div>)
  }
}

export default App
