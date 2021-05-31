import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryView from "../../pages/CategoryView/CategoryView";
import { fetchMarkets } from "../../redux/actions/market";
Category.propTypes = {};

function Category(props) {
  const marketList = useSelector((state) => state.market.list);
  const dispatch = useDispatch();
  const action = fetchMarkets();
  useEffect(() => {
    dispatch(action);
  }, [dispatch]);

  return (
    <div>
      <CategoryView markets={marketList[0]} />
    </div>
  );
}

export default Category;
