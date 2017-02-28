import React, {Component} from 'react'
import Banner from './banner/banner'
import Showcase from './showcase/showcase'

class Home extends Component{
  render(){
    return (<div>
        <Banner></Banner>
        <Showcase></Showcase>
      </div>)
  }
}

export default Home
