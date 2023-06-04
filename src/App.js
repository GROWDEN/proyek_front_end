import { useState, useEffect } from "react";
import "./App.css";
import PageContent from "./components/PageContent";
import SideMenu from "./components/SideMenu";
import Login from "./Pages/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  useEffect(() => {
    // Ketika status login berubah, atur tampilan SideMenu
    const shouldShowSideMenu =
      isLoggedIn && window.location.pathname !== "/login";
    setShowSideMenu(shouldShowSideMenu);
  }, [isLoggedIn]);

  return (
    <div className="App">
      <div className="SideMenuAndPageContent">
        {showSideMenu && <SideMenu />}
        {isLoggedIn ? <PageContent /> : <Login onLogin={handleLogin} />}
      </div>
    </div>
  );
}

export default App;
