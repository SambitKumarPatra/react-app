import React, {Component} from 'react'
import style from './header.css'
import FontAwesome from 'react-fontawesome'

class Header extends Component{

  constructor(props) {
    super(props)
    //this.handleScroll=this.handleScroll.bind(this);
  }

  // componentDidMount() {
  //   window.addEventListener("scroll",this.handleScroll)
  // }
  //
  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll)
  // }
  //
  // handleScroll(event){
  //   console.log(event.target)
  // }

  render(){
    return (
          <header ref={(headerPanel)=>{this.headerPanel=headerPanel;}}>
            <div className={style.headerWrapper}>
                <h3>
                  <div className={style.logo}></div>
                  <div className={style.title}>
                    <span className={style.firstName}>Flying</span>
                    <span className={style.lastName}>Roller</span>
                  </div>
                </h3>
                <ul className={style.links}>
                  <li className={style.pageLink}>Places</li>
                  <li className={style.pageLink}>Stories</li>
                  <li className={style.pageLink}>Our Team</li>
                </ul>
                <div className={style.auth}>
                <FontAwesome
                  className={style.socialLogo}
                  name='user-o'
                />
                <span className={style.signIn}>Sign in</span>
                <span className={style.register}>Register</span>
                </div>
            </div>
          </header>)
  }
}

export default Header
