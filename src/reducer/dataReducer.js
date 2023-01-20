export const intialState = {
  apiData: [],
  pageno: 1,
  emailData: [],
  filter: "",
  bodyData: "",
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
          read: false,
          favorite: false,
        })),
      };
    case "ADD_FILTER":
      return {
        ...state,
        filter: payload,
      };
    case "EMAIL_READ":
      return {
        ...state,
        emailData: state.emailData.map((item) =>
          item.id === payload ? { ...item, read: true } : item
        ),
      };
    case "UPDATE_BODY":
      return {
        ...state,
        body: payload,
      };
    case "TOGGLE_FAVORITES":
      return {
        ...state,
        emailData: state.emailData.map((item) =>
          item.id === payload ? { ...item, favorite: true } : item
        ),
      };
    case "CHANGE_PAGENO":
      return { ...state, pageno: payload };

    default:
      return state;
  }
};
