import React,{Component} from 'react'
import '../style.css'
import Header from './header/header'
import Banner from './banner/banner'
import Showcase from './showcase/showcase'
import Social from './social/social'

class App extends Component{
  render(){
    return (<div>
      <Header></Header>
      <Social></Social>
      <Banner></Banner>
      <Showcase></Showcase>
    </div>)
  }
}

export default App
