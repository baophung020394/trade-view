import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MarketView from "../../pages/MarketsView/MarketView";
import { fetchMarkets } from "../../redux/actions/market";
import { Row, Col } from "antd";

Markets.propTypes = {};

function Markets() {
  const marketList = useSelector((state) => state.market.list);
  const dispatch = useDispatch();
  const action = fetchMarkets();
  useEffect(() => {
    dispatch(action);
  }, [dispatch]);
  
  return (
    <div className="markets-parent">
      <Row>
        <Col span={24}>
          <MarketView markets={marketList[0]} />
        </Col>
      </Row>
    </div>
  );
}

export default Markets;
