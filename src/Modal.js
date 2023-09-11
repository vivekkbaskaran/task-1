import React, { useState } from "react";
import Input from './components/Input';
import Radio from './components/Radio'
import { FORM_FIELDS, TITLE, STEP1, STEP2, STEP1_SUBMIT_BUTTON, STEP2_SUBMIT_BUTTON } from './constants/const';

export default function Modal(props) {
    const { showModal } = props
    const [step, _setStep] = useState(1)
    const [formValues, setFormValues] = useState(FORM_FIELDS)

    const handleSubmit = (e) => {
        e.preventDefault();
        const { 
            job_title, company_name, industry, location, remote_type, 
            min_experience, max_experience, min_salary, max_salary, 
            total_employee, apply_type } = formValues;
        const payload = {
            job_title: job_title.value,
            company_name: company_name.value, 
            industry: industry.value,
            location: location.value, 
            remote_type: remote_type.value, 
            min_experience: min_experience.value, 
            max_experience: max_experience.value,
            min_salary: min_salary.value, 
            max_salary: max_salary.value,
            total_employee: total_employee.value,
            apply_type: apply_type.value
        };
        console.log('payload', payload)
    }

    const handleChange = (e, field) => {
        console.log('values', field)
        formValues[field].value = e.target.value;
        setFormValues(formValues);
    };

    const stepOneSubmit = () => {
        _setStep(2)
    }

    return (
        <>
            {
                showModal ? (
                    <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 rounded-t">
                                        <h4 className="text-font-color font-semibold text-lg">
                                            {TITLE}
                                        </h4>
                                        <h6 className="text-font-color font-semibold text-sm">
                                            {step === 1 ? STEP1 : STEP2}
                                        </h6>
                                    </div>
                                    {/*header*/}
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto">
                                        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                                            {step === 1 ?
                                                <div>
                                                    <div className="flex flex-wrap -mx-3 mb-6">
                                                        <div className="w-full px-3">
                                                            <Input fields={FORM_FIELDS['job_title']} onChange={handleChange} />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap -mx-3 mb-6">
                                                        <div className="w-full px-3">
                                                            <Input fields={FORM_FIELDS['company_name']} onChange={handleChange} />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap -mx-3 mb-6">
                                                        <div className="w-full px-3">
                                                            <Input fields={FORM_FIELDS['industry']} onChange={handleChange} />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap -mx-3 mb-6">
                                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                            <Input fields={FORM_FIELDS['location']} onChange={handleChange} />
                                                        </div>
                                                        <div className="w-full md:w-1/2 px-3">
                                                            <Input fields={FORM_FIELDS['remote_type']} onChange={handleChange} />
                                                        </div>
                                                    </div>
                                                </div> : (
                                                    <div>

                                                        <div className="flex flex-wrap -mx-3 mb-6">
                                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                                <Input fields={FORM_FIELDS['min_experience']} onChange={handleChange} />
                                                            </div>
                                                            <div className="w-full md:w-1/2 px-3">
                                                                <Input fields={FORM_FIELDS['max_experience']} onChange={handleChange} />
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap -mx-3 mb-6">
                                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                                <Input fields={FORM_FIELDS['min_salary']} onChange={handleChange} />
                                                            </div>
                                                            <div className="w-full md:w-1/2 px-3">
                                                                <Input fields={FORM_FIELDS['max_salary']} onChange={handleChange} />
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-wrap -mx-3 mb-6">
                                                            <div className="w-full px-3">
                                                                <Input fields={FORM_FIELDS['total_employee']} onChange={handleChange} />
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-wrap -mx-3 mb-6">
                                                            <div className="w-full px-3 ">
                                                                <Radio fields={FORM_FIELDS['apply_type']} onChange={handleChange} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            {/*footer*/}
                                            <div className="flex items-center justify-end p-6 rounded-b">
                                                {
                                                    step === 1 && <button
                                                        className="bg-primary-color text-white-color active:bg-emerald-600 font-bold text-sm px-6 py-2 rounded shadow"
                                                        type='button'
                                                        onClick={stepOneSubmit}
                                                    >
                                                        { STEP1_SUBMIT_BUTTON }
                                                    </button>
                                                }
                                                {
                                                    step === 2 && <button
                                                        className="bg-primary-color text-white-color active:bg-emerald-600 font-bold text-sm px-6 py-2 rounded shadow"
                                                        type='submit'
                                                    >
                                                        { STEP2_SUBMIT_BUTTON }
                                                    </button>
                                                }
                                            </div>
                                            {/*footer*/}
                                        </form>
                                    </div>
                                    {/*body*/}

                                </div>
                                {/*content*/}
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
        </>
    );
}