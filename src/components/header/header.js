import React, {Component} from 'react'
import common from '../../style.css'
import style from './header.css'
import FontAwesome from 'react-fontawesome'

class Header extends Component{
  render(){
    return (<header>
      <div className={common.container}>
        <h1 className={style.title}>
          <span className={style.firstname}>Flying</span> <span className={style.lastname}>Roller</span>
        </h1>
        <div className={style.route}>
          <ul>
            <li><a href="#">Places</a></li>
            <li><a href="#">Stories</a></li>
            <li><a href="#">Our Team</a></li>
          </ul>
        </div>
        <div className={style.auth}>
          <a className={style.social} href="#"><FontAwesome
          name='twitter'/></a>
          <a className={style.social} href="#"><FontAwesome
          name='facebook'/></a>
          <a className={style.social} href="#"><FontAwesome
          name='instagram'/></a>
          <a className={style.social} href="#"><FontAwesome
          name='youtube'/></a>
          <a className={style.authlink} href="#">Register</a>
          <a className={style.authlink} href="#">Login</a>
        </div>
      </div>
    </header>)
  }
}

export default Header
