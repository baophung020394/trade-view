import React from "react";
import Breadcrumbs from "../../common/Breadcrumbs/Breadcrumbs";
import PropTypes from "prop-types";

CategoryView.propTypes = {
  markets: PropTypes.object,
};

function CategoryView(props) {
  const { markets } = props;
  return (
    <div className="category">
      <Breadcrumbs />
      <div className="category-header">
        <div className="left"></div>
        <div className="right">
          <a className="follow">Follow</a>
          <a className="trade-now">Trade now</a>
        </div>
      </div>
      <div className="category-prices">
        <div className="main-price">
          <div className="top">
            <span className="number">
              3570
              <span className="plus">0.12</span>
              <span className="minus">0.12</span>
            </span>
            <span className="currencies">USD</span>
            <span className="change">
              <span className="plus">+0.12</span>
              <span className="minus"> (%0.12)</span>
            </span>
          </div>
          <div className="bottom">
            <span className="open">MARKET OPEN</span>
            <span className="date">(MAY 31 08:04 UTC)</span>
          </div>
        </div>
        <div className="sub-prices">
          <div className="item-subs">
            <div className="top">
              <span className="number">35700.12 </span>
            </div>
            <div className="bottom">
              <span>Prev</span>
            </div>
          </div>
          <div className="item-subs">
            <div className="top">
              <span className="number">35700.12 </span>
            </div>
            <div className="bottom">
              <span>Open</span>
            </div>
          </div>
          <div className="item-subs">
            <div className="top">
              <span className="number">35700.12 </span>
            </div>
            <div className="bottom">
              <span>Volumn</span>
            </div>
          </div>
          <div className="item-subs">
            <div className="top">
              <span className="number">35700.12 -36009.14 </span>
            </div>
            <div className="bottom">
              <span>Day's Range</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryView;
