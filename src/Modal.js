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
        console.log('formValues', formValues)
    }

    const handleChange = (e, index) => {
        const values = [...formValues];
        values[index].value = e.target.value;
        setFormValues(values);
    };

    const stepOneSubmit = () => {

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
                                                            <Input fields={FORM_FIELDS[0]} onChange={handleChange} />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap -mx-3 mb-6">
                                                        <div className="w-full px-3">
                                                            <Input fields={FORM_FIELDS[1]} onChange={handleChange} />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap -mx-3 mb-6">
                                                        <div className="w-full px-3">
                                                            <Input fields={FORM_FIELDS[2]} onChange={handleChange} />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap -mx-3 mb-6">
                                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                            <Input fields={FORM_FIELDS[3]} onChange={handleChange} />
                                                        </div>
                                                        <div className="w-full md:w-1/2 px-3">
                                                            <Input fields={FORM_FIELDS[4]} onChange={handleChange} />
                                                        </div>
                                                    </div>
                                                </div> : (
                                                    <div>

                                                        <div className="flex flex-wrap -mx-3 mb-6">
                                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                                <Input fields={FORM_FIELDS[5]} onChange={handleChange} />
                                                            </div>
                                                            <div className="w-full md:w-1/2 px-3">
                                                                <Input fields={FORM_FIELDS[6]} onChange={handleChange} />
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap -mx-3 mb-6">
                                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                                <Input fields={FORM_FIELDS[7]} onChange={handleChange} />
                                                            </div>
                                                            <div className="w-full md:w-1/2 px-3">
                                                                <Input fields={FORM_FIELDS[8]} onChange={handleChange} />
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-wrap -mx-3 mb-6">
                                                            <div className="w-full px-3">
                                                                <Input fields={FORM_FIELDS[9]} onChange={handleChange} />
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-wrap -mx-3 mb-6">
                                                            <div className="w-full px-3 ">
                                                                <Radio fields={FORM_FIELDS[10]} onChange={handleChange} />
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