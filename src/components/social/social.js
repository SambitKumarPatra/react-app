import React, {Component} from 'react'
import style from './social.css'
import FontAwesome from 'react-fontawesome'

class Social extends Component{
  render(){
    return (<nav className={style.social}>
          <ul>
              <li><a href="http://twitter.com/flying_roller">Twitter <FontAwesome
                className={style.socialLogo}
                name='twitter'
              /></a></li>
              <li><a href="http://facebook.com/flying_roller">Facebook <FontAwesome
                className={style.socialLogo}
                name='facebook'
              /></a></li>
              <li><a href="http://instagram.com/flying_roller">Instagram <FontAwesome
                className={style.socialLogo}
                name='instagram'
              /></a></li>
          </ul>
      </nav>)
  }
}

export default Social
