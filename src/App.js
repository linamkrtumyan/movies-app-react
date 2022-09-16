import React from "react";
import "./App.css";
import RoutesComponent from "./Components/Routes/Routes";
import Sidebar from "./Components/Sidebar/Sidebar";
export const MovieContext = React.createContext();

function App() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      console.log(action, "action");
      switch (action.type) {
        case "SET_FEATURED":
          return {
            ...prevState,
            featuredId: action.movieId,
          };
      }
    },
    {
      featuredId: null,
    }
  );

  console.log(state, "state");
  const movieContext = React.useMemo(
    () => ({
      setFeaturedMovie: (id) => dispatch({ type: "SET_FEATURED", movieId: id }),
    }),
    []
  );

  const providerValue = {
    state,
    movieContext,
  };

  return (
    <>
      <MovieContext.Provider value={providerValue}>
        <div className="app-container">
          <Sidebar />

          <div className="main-container">
            <RoutesComponent />
          </div>
        </div>
      </MovieContext.Provider>
    </>
  );
}

export default App;
