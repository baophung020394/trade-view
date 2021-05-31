import "antd/dist/antd.css";
import Header from "./common/Header/Header";
import HomeView from "./pages/Home/HomeView";
import "./App.css";
import "./style.scss";
import Footer from "./common/Footer/Footer";

function App() {
  return (
    <div className="app">
      <div className="wrap-container">
        <Header />
        <HomeView />
      </div>
      <hr></hr>
      <Footer />
    </div>
  );
}

export default App;
