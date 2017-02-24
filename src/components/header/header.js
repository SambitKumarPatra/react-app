import React, {Component} from 'react'
import style from './header.css'
import FontAwesome from 'react-fontawesome'

class Header extends Component{

  constructor(props) {
    super(props)
    this.handleScroll=this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll",this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event){
    console.log(event.target)
  }

  render(){
    return (<div className={style.header}>
        <div className={style.headerBg}>
          <header ref={(headerPanel)=>{this.headerPanel=headerPanel;}}>
            <div className={style.headerWrapper}>
                <h1>
                  <div className={style.logo}></div>
                  <div className={style.title}>
                  </div>
                </h1>
                <div className={style.auth}>
                </div>
            </div>
          </header>
          <div className={style.contentWrapper}>
            <h2>
              <span className={style.firstName}>Flying</span>
              <span className={style.lastName}>Roller</span>
            </h2>
            <h3 className={style.caption}>Dare To Fly</h3>
            <p className={style.brief}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus mollitia alias dolore dolorem quaerat aperiam, facilis ipsum dolores numquam velit? Repellat voluptatum quasi non, deleniti dolore nemo ipsam esse cupiditate.
            </p>
          </div>
        </div>
      </div>)
  }
}

export default Header
