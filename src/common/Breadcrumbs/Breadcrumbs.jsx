import React from "react";
import { Breadcrumb } from 'antd';

Breadcrumbs.propTypes = {};

function Breadcrumbs(props) {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>Markets</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Cryptocurrencies</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Bitcoin</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>BTUSD</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default Breadcrumbs;
