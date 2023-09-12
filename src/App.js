import { useEffect, useState } from "react";
import axios from 'axios';
import Modal from './Modal';
import JobCard from './components/JobCard';
import { JOB_API, GET_STATUS } from './constants/apiConst';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [cardDetails, setCardDetails] = useState([]);

  useEffect(() => {
    axios.get(JOB_API.URL)
        .then(response => {
            const { status, data } = response;
            if (status === GET_STATUS) {
              setCardDetails(data)
            }
        });
  }, [])

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
      <div className="gap-8 grid grid-cols-2 p-4">
        {cardDetails && cardDetails.map((item, index) => <JobCard key={index} cardDetails={item}></JobCard>)}
      </div>
    </>
  );
}

export default App;
