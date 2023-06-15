// import React from 'react';
// import logoPath from '../images/logo.svg';
// function Header() {
//   return (
//     <header className="header">
//       <img src={logoPath} alt="Логотип" className="header__logo" />
//     </header>
//   );
// }

// export default Header;
import React from 'react';
import logoPath from '../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';

function Header(logout, {loggedIn, email}) {
    const location = useLocation()
    //console.log(location)

    function headerLocation() {
        if (location.pathname === "/sign-in") {
            return <Link to="/sign-up" className="header__link">Регистрация</Link>
        } else if (location.pathname === "/sign-up") {
            return <Link to="/sign-in" className="header__link">Войти</Link>             
        } else {
            return  <Link to="/sign-in" className="header__link">Выйти</Link>
        }
    }

    return (
        <header className= "header">
            <img className="logo" src={logoPath} alt='Логотип' />
            <div className="header__container">
            {loggedIn ? '' : <p className="header__email">{email}</p>}
               {headerLocation()}
            </div>
        </header>
    )
}

export default Header;