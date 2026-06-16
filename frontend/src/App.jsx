import { useState } from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [user, setUser] = useState(null); // Keeps track of who is logged in
  const [showLogin, setShowLogin] = useState(true); // Switches between login & signup views

  // If a user is logged in, show them the ATM dashboard!
  if (user) {
    return <Dashboard user={user} onLogout={() => setUser(null)} />;
  }

  // Otherwise, switch between Login and Signup screens
  return showLogin ? (
    <Login setUser={setUser} setShowLogin={setShowLogin} />
  ) : (
    <Signup setShowLogin={setShowLogin} />
  );
}

export default App;