import Routes from "../config/routes";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "../context/auth";

export default function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes />
        </Router>
      </AuthProvider>
    </div>
  );
}
