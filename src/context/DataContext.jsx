import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { DataReducer, intialState } from "../reducer/dataReducer";

const DataContext = createContext();
export const useData = () => useContext(DataContext);

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(DataReducer, intialState);
  useEffect(() => {
    (async function () {
      try {
        const {
          data: { list },
        } = await axios.get("https://flipkart-email-mock.now.sh/");
        console.log(list);
        dispatch({
          type: "INITIALIZE_DATA",
          payload: list,
        });
        dispatch({
          type: "ADD_EMAILDATA",
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <DataContext.Provider
      value={{
        emailData: state.emailData,
        apiData: state.apiData,
        filter: state.filter,
        pageno: state.pageno,
        body: state.body,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
