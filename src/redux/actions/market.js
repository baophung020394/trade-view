import axios from "axios";

export const fetchMarkets = () => {
  return (dispatch) => {
    dispatch(fetchMarketsRequest());
    axios
      .get("http://47.242.226.118:10097/")
      .then((response) => {
        // response.data is the users
        const markets = response.data;
        const filterMarkets = markets.filter(x => x.interval === '1m');
        dispatch(fetchMarketsSuccess(filterMarkets));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchMarketsFailure(error.message));
      });
  };
};

export const fetchMarketsRequest = () => {
  return {
    type: 'FETCH_MARKETS_REQUEST',
  };
};

export const fetchMarketsSuccess = (markets) => {
  return {
    type: 'FETCH_MARKETS_SUCCESS',
    payload: markets,
  };
};

export const fetchMarketsFailure = (error) => {
  return {
    type: 'FETCH_MARKETS_FAILURE',
    payload: error,
  };
};
