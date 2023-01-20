import "./scss/home.scss";
import LeftPanel from "./partials/LeftPanel";
import RightPanel from "./partials/RightPanel";
import CenterPanel from "./partials/CenterPanel";

function App() {
  return (
    <div className="App">
      <LeftPanel />
      <CenterPanel />
      <RightPanel />
    </div>
  );
}

export default App;
