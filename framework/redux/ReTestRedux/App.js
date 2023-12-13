import { Provider } from "react-redux";
import store from "./redux/store";
import ToDo from "./components/Todo";
const App = () => {
  return (
    <Provider store={store}>
      {" "}
      <ToDo />
    </Provider>
  );
};
export default App;
