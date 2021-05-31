const initialState = {
  list: [],
  isLoading: false,
  error: "",
};

const marketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MARKETS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_MARKETS_SUCCESS":
      return {
        isLoading: false,
        list: action.payload,
        error: "",
      };
    case "FETCH_MARKETS_FAILURE":
      return {
        isLoading: false,
        list: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default marketReducer;
