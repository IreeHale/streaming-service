import '../styles/create-user.scss'

export default function Home() {
  return (
    <div>
      <div className="create-user">
        <div className="create-user__top">
          <div className="create-user__logo" />
          <span className="create-user__title">
            Who Is Watching?
          </span>
        </div>

        <div className="create-user__form">
          <div className="create-user__user-box">
            <img className="create-user__user-img" src="https://mighty.tools/mockmind-api/content/human/65.jpg"/>
            <div className="create-user__user-name">Bryant</div>
          </div>
        </div>
        <div className="create-user__buttons">
          <button className="create-user__adult">Add Adult</button>
          <button className="create-user__adult">Add Kid</button>
        </div>
      </div>
    </div>
  )
}
