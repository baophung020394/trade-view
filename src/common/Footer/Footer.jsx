import React from "react";

Footer.propTypes = {};

function Footer(props) {
  return (
    <div className="wrap-container">
      <div className="footer">
        <div className="footer-col">
          <h3 className="title">Products</h3>
          <div className="links">
            <a>Chart</a>
            <a>Pine Script</a>
            <a>Stock Screener</a>
            <a>Forex Screener</a>
            <a>Crypto Screener</a>
            <a>Economic Calendar</a>
            <a>Earnings Calendar</a>
          </div>
        </div>
        <div className="footer-col">
          <h3 className="title">Company</h3>
          <div className="links">
            <a>About</a>
            <a>Features</a>
            <a>Pricing</a>
            <a>Wall of Love</a>
            <a>Blog</a>
            <a>Security vulnerability</a>
            <a>Status page</a>
            <a>Terms of use</a>
            <a>Disclaimer</a>
            <a>Privacy policy</a>
            <a>Cookies policy</a>
          </div>
        </div>
        <div className="footer-col">
          <h3 className="title">Community</h3>
          <div className="links">
            <a>Refer a friend</a>
            <a>Ideas</a>
            <a>Scripts</a>
            <a>Streams</a>
            <a>House rules</a>
            <a>Moderators</a>
            <a>Pine Wizards</a>
            <a>Chat</a>
          </div>
        </div>
        <div className="footer-col">
          <h3 className="title">For business</h3>
          <div className="links">
            <a>Widgets</a>
            <a>Advertising</a>
            <a>Website & broke</a>
            <a>Charting solutions</a>
            <a>Lightweight Charting Library</a>
            <a>Brokerage integration</a>
            <a>Partner program</a>
            <a>Content streams & RSS</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
