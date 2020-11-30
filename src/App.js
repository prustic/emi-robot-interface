import AppRouter from "./AppRouter";
import "./util/style.css";
import { BrowserRouter as Router} from "react-router-dom";

function App() {

  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
