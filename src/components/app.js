import React,{Component} from 'react'
import '../style.css'
import {Header,Social} from './common'
// import Home from './home'

class MainLayout extends Component{
  render(){
    return (<div className='app'>
      <Header></Header>
      <Social></Social>
      <main>
        {this.props.children}
      </main>
    </div>)
  }
}

export default MainLayout
