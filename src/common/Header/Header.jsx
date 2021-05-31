import React from "react";

Header.propTypes = {};
function Header(props) {
  return (
    <div className="header">
      <a  className="tv-header__link tv-header__link--logo">
        <span className="tv-header__icon tv-header__icon--logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="19"
            viewBox="0 0 33 19"
          >
            <path
              fill="#2196F3"
              d="M29.032 7.382a5.47 5.47 0 0 1 .963 2.872A4.502 4.502 0 0 1 28.5 19H6a5.98 5.98 0 0 1-4.222-1.737l9.546-7.556c.35.187.75.293 1.176.293a2.49 2.49 0 0 0 1.066-.238l4.55 3.981a2.5 2.5 0 1 0 4.711-.157l6.205-6.204zm-1.414-1.414l-6.204 6.204A2.494 2.494 0 0 0 20.5 12a2.49 2.49 0 0 0-1.066.238l-4.55-3.981a2.5 2.5 0 1 0-4.801-.118L.608 15.638A6 6 0 0 1 6.061 7a8.001 8.001 0 0 1 15.625-1.227A5.474 5.474 0 0 1 24.5 5c1.157 0 2.231.358 3.118.968z"
            ></path>
          </svg>
        </span>
        <span className="tv-header__logo-text">TradingView</span>
      </a>
      <div className="authenticate">
        <a className="sign-in">
          Sign in
        </a>
        <a className="start-free-trial">
          Start free trial
        </a>
      </div>
    </div>
  );
}

export default Header;
