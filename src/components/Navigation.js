import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdGTranslate, MdOutlineWbSunny } from "react-icons/md";
import { RiLogoutCircleRLine, RiMoonLine } from "react-icons/ri";
import { getAccessToken } from "../utils/network-data";
import LocaleContext from "../contexts/LocaleContexts";
import ThemeContext from "../contexts/ThemeContext";
import PropTypes from "prop-types";

function Navigation({ logout, name }) {
   const { locale, toggleLocale } = useContext(LocaleContext);
   const { theme, toggleTheme } = useContext(ThemeContext);

   const accessToken = getAccessToken();
   return (
      <>
         <h1>
            <Link to="/">
               {locale === "id" ? "Aplikasi Catatan Haikal" : "Notes App"}
            </Link>
         </h1>
         {accessToken ? (
            <nav className="navigation">
               <ul>
                  <li>
                     <Link to="/archive">
                        {locale === "id" ? "Arsip" : "Archive"}
                     </Link>
                  </li>
               </ul>
            </nav>
         ) : null}
         <button className="toggle-locale" type="button" onClick={toggleLocale}>
            <MdGTranslate />
         </button>
         <button className="toggle-theme" type="button" onClick={toggleTheme}>
            {theme === "dark" ? <MdOutlineWbSunny /> : <RiMoonLine />}
         </button>
         {accessToken ? (
            <button className="button-logout" type="button" onClick={logout}>
               <RiLogoutCircleRLine />
               {name}
            </button>
         ) : null}
      </>
   );
}

Navigation.propTypes = {
   logout: PropTypes.func.isRequired,
   name: PropTypes.string.isRequired,
};

export default Navigation;
