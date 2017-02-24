import React,{Component} from 'react'
import '../style.css'
import Header from './header/header'
import Showcase from './showcase/showcase'
import Social from './social/social'

class App extends Component{
  render(){
    return (<div>
      <Social></Social>
      <Header></Header>
      <Showcase></Showcase>
    </div>)
  }
}

export default App
