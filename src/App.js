import { useEffect, useState } from "react";
import axios from 'axios';
import Modal from './Modal';
import JobCard from './components/JobCard';
import { JOB_API, GET_STATUS } from './constants/apiConst';
import { FORM_FIELDS, STEP2_SUBMIT_BUTTON, STEP2_UPDATE_BUTTON } from './constants/const';

function App() {
  const [showModal, _setShowModal] = useState(false);
  const [formDetails, _setFormDetails] = useState(FORM_FIELDS);
  const [formType, _setFormType] = useState(STEP2_SUBMIT_BUTTON);
  const [id, _setId] = useState(STEP2_SUBMIT_BUTTON);
  const [cardDetails, _setCardDetails] = useState([]);

  useEffect(() => {
    getDetails()
  }, [])

  const getDetails = () => {
    axios.get(JOB_API.URL)
      .then(response => {
          const { status, data } = response;
          if (status === GET_STATUS) {
            _setCardDetails(data)
          }
      });
  }

  const jobCreated = () => {
    _setShowModal(false)
  }

  const resetForm = () => {
    Object.keys(FORM_FIELDS).map((item) => {
      if (!FORM_FIELDS[item].apply_type) {
        FORM_FIELDS[item].value = ''
      } else {
        FORM_FIELDS[item].radioOptions.forEach((item) => {
          item.value = false
        })
      }
    })
  }

  const openModal = () => {
    resetForm()
    _setFormType(STEP2_SUBMIT_BUTTON)
    _setShowModal(true)
  }

  const editJob = (index) => {
    const { 
      job_title, company_name, industry, location, remote_type, 
      min_experience, max_experience, min_salary, max_salary,
      total_employee, id, apply_type
    } = cardDetails[index];
    _setId(id);
    FORM_FIELDS['job_title'].value = job_title
    FORM_FIELDS['company_name'].value = company_name
    FORM_FIELDS['industry'].value = industry
    FORM_FIELDS['location'].value = location
    FORM_FIELDS['remote_type'].value = remote_type
    FORM_FIELDS['min_experience'].value = min_experience
    FORM_FIELDS['max_experience'].value = max_experience
    FORM_FIELDS['min_salary'].value = min_salary
    FORM_FIELDS['max_salary'].value = max_salary
    FORM_FIELDS['total_employee'].value = total_employee
    if (apply_type === 'internal') {
      FORM_FIELDS['apply_type']['radioOptions'][0].value = true;
    }
    if (apply_type === 'external') {
      FORM_FIELDS['apply_type']['radioOptions'][1].value = true;
    }
    
    _setShowModal(true)
    _setFormType(STEP2_UPDATE_BUTTON)
  }

  return (
    <>
      <button
        className="shadow card-border-color p-2 ml-10 m-10 mx-auto bg-primary-color"
        type="button"
        onClick={openModal}
      >
        Create Job
      </button>
      {
        showModal ? <Modal showModal={showModal} id={id} formType={formType} _setShowModal={jobCreated} getDetails={getDetails} FORM_FIELDS={formDetails} /> : null
      }
      <div className="gap-8 grid grid-cols-2 p-4">
        {cardDetails && cardDetails.map((item, index) => <JobCard key={index} index={index} editJob={editJob} cardDetails={item}></JobCard>)}
      </div>
    </>
  );
}

export default App;
