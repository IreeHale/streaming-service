import '../styles/create-user.scss'

export default function CreateUser() {
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
            <img className="create-user__user-img" src="https://mighty.tools/mockmind-api/content/human/65.jpg"/>
            <div className="create-user__input-group">
              <label>Name</label>
              <input type="text" className="create-user__inputText"/>
              <div className="create-user__colors">
                <div className="create-user__color create-user__color--active" style={{
                  background: 'rgb(2,27,64)',
                  background: 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(119,30,135,1) 100%)'
                }} />
                <div className="create-user__color" style={{
                    background: 'rgb(2,27,64)',
                    background: 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(0,212,255,1) 100%)'
                }} />
                <div className="create-user__color" style={{
                    background: 'rgb(2,27,64)',
                    background: 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(12,121,9,1) 100%)'
                }} />
                <div className="create-user__color" style={{
                    background: 'rgb(2,0,36)',
                    background: 'linear-gradient(135deg, rgba(121,115,9,1) 34%, rgba(0,212,255,1) 100%)' 
                }} />
                <div className="create-user__color" style={{
                  background: 'rgb(2,27,64)',
                  background: 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(228,21,13,100) 100%)'
                }} />
              </div>
            </div>
        </div>
        <div className="create-user__buttons">
          <button className="create-user__cancel">Cancel</button>
          <button className="create-user__save">Save</button>
        </div>
      </div>
    </div>
  )
}
