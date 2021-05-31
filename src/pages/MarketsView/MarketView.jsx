import { Col, Row, Table } from "antd";
import PropTypes from "prop-types";
import React from "react";

MarketView.propTypes = {
  markets: PropTypes.object,
};

MarketView.defaultProps = {
  markets: {},
};

function MarketView(props) {
  const { markets } = props;

  const columns = [
    {
      title: "Name",
      dataIndex: `name`,
      key: "name",
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      // render: action => (
      //   <>
      //     {
      //       if(action === 'BUY') {
      //         return ()
      //       }
      //     }
          
      //   </>
      // ),
    },
  ];
  const columnsPivots = [
    {
      title: "Pivot",
      dataIndex: `pivot`,
      key: "pivot",
    },
    {
      title: "Classic",
      dataIndex: "classic",
      key: "classic",
    },
    {
      title: "Fibonacci",
      dataIndex: "fibonacci",
      key: "fibonacci",
    },
    {
      title: "Camarilla",
      dataIndex: `camarilla`,
      key: "camarilla",
    },
    {
      title: "Woodie",
      dataIndex: "woodie",
      key: "woodie",
    },
    {
      title: "DM",
      dataIndex: "dm",
      key: "dm",
    },
  ];
  const dataOscillators = [
    {
      name: `RSI`,
      value: `${markets.RSI_val}`,
      action: `${markets.RSI}`,
    },
    {
      name: `Stoch.K`,
      value: `${markets["Stoch.K_val"]}`,
      action: `${markets["STOCH.K"]}`,
    },
    {
      name: `CCI`,
      value: `${markets.CCI20_val}`,
      action: `${markets.CCI}`,
    },
    {
      name: `ADX`,
      value: `${markets.ADX_val}`,
      action: `${markets.ADX}`,
    },
    {
      name: `AO`,
      value: `${markets.AO_val}`,
      action: `${markets.AO}`,
    },
    {
      name: `Mom`,
      value: `${markets.Mom_val}`,
      action: `${markets.Mom}`,
    },
    {
      name: `MACD Level`,
      value: `${markets["MACD.macd_val"]}`,
      action: `${markets.MACD}`,
    },
    {
      name: `Stoch.RSI`,
      value: `${markets["Stoch.RSI.K_val"]}`,
      action: `${markets["Stoch.RSI"]}`,
    },
    {
      name: `BBP`,
      value: `${markets.BBPower_val}`,
      action: `${markets.BBP}`,
    },
    {
      name: `UO`,
      value: `${markets.UO_val}`,
      action: `${markets.UO}`,
    },
  ];
  const dataMovingAverages = [
    {
      name: `EMA10`,
      value: `${markets.EMA10_val}`,
      action: `${markets.EMA10}`,
    },
    {
      name: `SMA10`,
      value: `${markets.SMA10_val}`,
      action: `${markets.SMA10}`,
    },
    {
      name: `EMA20`,
      value: `${markets.EMA20_val}`,
      action: `${markets.EMA20}`,
    },
    {
      name: `SMA20`,
      value: `${markets.SMA20_val}`,
      action: `${markets.SMA20}`,
    },
    {
      name: `SMA30`,
      value: `${markets.SMA30_val}`,
      action: `${markets.SMA30}`,
    },
    {
      name: `EMA50`,
      value: `${markets.EMA50_val}`,
      action: `${markets.EMA50}`,
    },
    {
      name: `SMA50`,
      value: `${markets.SMA50}`,
      action: `${markets.SMA50}`,
    },
    {
      name: `EMA100`,
      value: `${markets.EMA100_val}`,
      action: `${markets.EMA100}`,
    },
    {
      name: `SMA100`,
      value: `${markets.SMA100_val}`,
      action: `${markets.SMA100}`,
    },
    {
      name: `EMA200`,
      value: `${markets.EMA200_val}`,
      action: `${markets.EMA200}`,
    },
    {
      name: `Ichimoku`,
      value: `${markets['Ichimoku.BLine_val']}`,
      action: `${markets.Ichimoku}`,
    },
    {
      name: `VWMA`,
      value: `${markets.VWMA_val}`,
      action: `${markets.VWMA}`,
    },
    {
      name: `HullMA`,
      value: `${markets.HullMA9_val}`,
      action: `${markets.HullMA}`,
    },
  ];
  const dataPivots = [
    {
      pivot: `S3`,
      classic: `${markets['Pivot.M.Classic.S3_val']}`,
      fibonacci: `${markets['Pivot.M.Fibonacci.S3_val']}`,
      camarilla: `${markets['Pivot.M.Camarilla.S3_val']}`,
      woodie: `${markets['Pivot.M.Woodie.S3_val']}`,
      dm: `-`,
    },
    {
      pivot: `S2`,
      classic: `${markets['Pivot.M.Classic.S2_val']}`,
      fibonacci: `${markets['Pivot.M.Fibonacci.S2_val']}`,
      camarilla: `${markets['Pivot.M.Camarilla.S2_val']}`,
      woodie: `${markets['Pivot.M.Woodie.S2_val']}`,
      dm: `-`,
    },
    {
      pivot: `S1`,
      classic: `${markets['Pivot.M.Classic.S1_val']}`,
      fibonacci: `${markets['Pivot.M.Fibonacci.S1_val']}`,
      camarilla: `${markets['Pivot.M.Camarilla.S1_val']}`,
      woodie: `${markets['Pivot.M.Woodie.S1_val']}`,
      dm: `${markets['Pivot.M.Demark.S1_val']}`,
    },
    {
      pivot: `P`,
      classic: `${markets['Pivot.M.Classic.Middle_val']}`,
      fibonacci: `${markets['Pivot.M.Fibonacci.Middle_val']}`,
      camarilla: `${markets['Pivot.M.Camarilla.Middle_val']}`,
      woodie: `${markets['Pivot.M.Woodie.Middle_val']}`,
      dm: `${markets['Pivot.M.Demark.Middle_val']}`,
    },
    {
      pivot: `R1`,
      classic: `${markets['Pivot.M.Classic.R1_val']}`,
      fibonacci: `${markets['Pivot.M.Fibonacci.R1_val']}`,
      camarilla: `${markets['Pivot.M.Camarilla.S1_val']}`,
      woodie: `${markets['Pivot.M.Woodie.S1_val']}`,
      dm: `${markets['Pivot.M.Demark.R1_val']}`,
    },
    {
      pivot: `R2`,
      classic: `${markets['Pivot.M.Classic.R2_val']}`,
      fibonacci: `${markets['Pivot.M.Fibonacci.R2_val']}`,
      camarilla: `${markets['Pivot.M.Camarilla.S2_val']}`,
      woodie: `${markets['Pivot.M.Woodie.S2_val']}`,
      dm: `-`,
    },
    {
      pivot: `R3`,
      classic: `${markets['Pivot.M.Classic.R3_val']}`,
      fibonacci: `${markets['Pivot.M.Fibonacci.R3_val']}`,
      camarilla: `${markets['Pivot.M.Camarilla.S3_val']}`,
      woodie: `${markets['Pivot.M.Woodie.S3_val']}`,
      dm: `-`,
    },
  ];

  return (
    <div className="markets-child">
      <Row>
        <Col span={12}>
          <h1>Oscillators</h1>
          <Table
            columns={columns}
            dataSource={dataOscillators}
            rowKey="name"
            pagination={false}
          />
        </Col>
        <Col span={12}>
          <h1>MOVING AVERAGES</h1>
          <Table
            columns={columns}
            dataSource={dataMovingAverages}
            rowKey="name"
            pagination={false}
          />
        </Col>
        <Col span={24}>
          <h1>PIVOTS</h1>
          <Table
            columns={columnsPivots}
            dataSource={dataPivots}
            rowKey="pivot"
            pagination={false}
          />
        </Col>
        
      </Row>
    </div>
  );
}

export default MarketView;
