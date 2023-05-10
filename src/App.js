import "./common/css/App.css";
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import Display from "./components/Display/Display";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (inputData) => {
    setData({
      action: inputData.action,
      time: inputData.time,
    });
    setIsSubmit(true);
  };

  return (
    <div className="container">
      <Header />
      <UserInput handleSubmit={handleSubmit} />
      {isSubmit && <Display data={data} />}
      <Footer />
    </div>
  );
}
export default App;
