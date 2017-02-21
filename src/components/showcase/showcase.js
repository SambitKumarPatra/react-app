import React, {Component} from 'react'
import common from '../../style.css'
import style from './showcase.css'

class Showcase extends Component{
  render(){
    return (<div className={style.dashboard}>
      <div className={common.container}>
        <div className={style.imagecropper}>
        </div>
      </div>
    </div>)
  }
}

export default Showcase
