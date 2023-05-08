import "./common/css/App.css";
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import Display from "./components/Display/Display";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <UserInput />
      <Display />
      <Footer />
    </div>
  );
}
export default App;
