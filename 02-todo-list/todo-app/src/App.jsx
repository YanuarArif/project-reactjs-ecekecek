import store from "./redux/store";
import { Provider } from "react-redux";
import { Todo } from "./components/Todo";
import { FilterButton } from "./components/FilterButton";

function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default App;
