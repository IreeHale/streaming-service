import './header.scss';


const Header = (props) => {
    return (
        <header className="top-header">
            <div className="top-header__left-side">
                <div className="top-header__menu-btn">
                    <i className="bi bi-list" />
                </div>
                <div className="top-header__search-btn">
                    <i className="bi bi-search" />
                </div>
            </div>
            <div className="top-header__logo"></div>
            <div className="top-header__account">
                <img className="top-header__user-img" src="https://mighty.tools/mockmind-api/content/human/65.jpg"/>
                <div className="top-header__user-name">Bryant</div>
            </div>
        </header>
    )
}

export default Header;