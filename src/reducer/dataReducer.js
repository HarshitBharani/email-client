export const intialState = {
  apiData: [],
  pageno: 1,
  emailData: [],
  filter: "",
};
export const DataReducer = (state, { type, payload }) => {
  switch (type) {
    case "INITIALIZE_DATA":
      return { ...state, apiData: payload };
    case "ADD_EMAILDATA":
      return {
        ...state,
        emailData: state.apiData.map((obj) => ({
          ...obj,
          Read: false,
          favorite: false,
        })),
      };
    case "ADD_FILTER":
      return {
        ...state,
        filter: payload,
      };
    default:
      return state;
  }
};
