import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./lib/redux";
import InboxScreen from "./stories/InboxScreen";

function App() {
  return (
    <Provider>
      <InboxScreen />
    </Provider>
  );
}

export default App;
