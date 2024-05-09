import ListContainer from "./components/ListContainer";
import CenterBox from "./components/CenterBox";
import Icon from "./components/Icons";
import useCaloriesTraker from "./hooks/useCaloriesTraker";
import { useEffect } from "react";

function App() {
  const { state, dispatch, displayIntakeList, displayBurnedList, backToHome } =
    useCaloriesTraker();

  const [intakeTempData, burnedTempData] = ["food", "exercise"].map(
    (category) =>
      state.activities.filter((activity) => activity.category === category)
  );

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(state.activities));
  }, [state.activities]);

  return (
    <>
      <div
        id="container"
        className=" w-screen md:max-w-7xl h-screen md:h-auto overflow-hidden rounded-none md:rounded-3xl flex flex-col justify-between items-center bg-my-black px-3 py-10"
      >
        <div>
          <img
            src="img/logo-title.png"
            alt="logo-img"
            className=" max-w-72 h-auto block"
          />
        </div>

        <div id="app-box" className=" w-[300vw] md:w-full h-[600px] flex">
          <ListContainer
            data={intakeTempData}
            titleClass={"text-my-green"}
            type={"intake"}
            color={"#06d6a0ff"}
            active={state.isIntakeListActived}
            dispatch={dispatch}
          />
          <CenterBox dispatch={dispatch} state={state} />
          <ListContainer
            data={burnedTempData}
            titleClass={"text-my-pink"}
            type={"burned"}
            color={"#ef476fff"}
            active={state.isBurnedListActived}
            dispatch={dispatch}
          />
        </div>

        <div id="nav" className=" w-full flex justify-around md:hidden">
          <div
            className="grid place-items-center w-16 h-16 cursor-pointer rounded-full"
            onClick={displayIntakeList}
          >
            <Icon type={"intake"} color={"#06d6a0ff"} size={44} />
          </div>
          <div
            className="grid place-items-center w-16 h-16 cursor-pointer rounded-full bg-my-white"
            onClick={backToHome}
          >
            <Icon type={"home"} color={"#564e58ff"} size={44} />
          </div>
          <div
            className="grid place-items-center w-16 h-16 cursor-pointer rounded-full"
            onClick={displayBurnedList}
          >
            <Icon type={"burned"} color={"#ef476fff"} size={44} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
