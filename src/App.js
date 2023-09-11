import { useState } from "react";
import Modal from './Modal';

function App() {
  const [showModal, setShowModal] = useState(false);

  const jobCreated = () => {
    setShowModal(false)
  }

  return (
    <>
      <button
        className="shadow card-border-color p-2 ml-10 m-10 mx-auto bg-primary-color"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Create Job
      </button>
      {
        showModal ? <Modal showModal={showModal} setShowModal={jobCreated} /> : null
      }
    </>
  );
}

export default App;
