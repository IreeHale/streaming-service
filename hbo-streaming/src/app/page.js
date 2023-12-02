import styles from './styles/page.module.scss'
import './styles/login.scss'

export default function Home() {
  return (
    <div>
      <div className="login-user">
        <div className="login-user__top">
          <div className="login-user__logo" />
          <span className="login-user__title">
            Who Is Watching?
          </span>
        </div>

        <div className="login-user__form">
          <div className="login-user__user-box">
            <img className="login-user__user-img" src="https://mighty.tools/mockmind-api/content/human/65.jpg"/>
          </div>
        </div>
      </div>
    </div>
  )
}
