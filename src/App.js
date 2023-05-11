import "./common/css/App.css";
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import Display from "./components/Display/Display";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Modal from "./components/Modal/Modal";

function App() {
  const [data, setData] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (inputData) => {
    setData({
      expert: inputData.expert,
      trainingTime: inputData.trainingTime,
    });
    setIsSubmit(true);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <Header />
      <UserInput handleSubmit={handleSubmit} />
      {isSubmit && <Display data={data} handleModalOpen={handleModalOpen} />}
      <Footer />
      {isModalOpen && <Modal handleModalClose={handleModalClose} />}
    </div>
  );
}
export default App;
