export const TITLE = 'Create a job';
export const STEP1 = 'Step 1';
export const STEP1_SUBMIT_BUTTON = 'Next';
export const STEP2_SUBMIT_BUTTON = 'Save';
export const STEP2 = 'Step 2';
export const FORM_FIELDS = {
    job_title : {
        label:"true" ,
        value: '',
        index: 0,
        required: true,
        invalid: true,
        errorMessage: 'This filed is required',
        field: 'job_title',
        labelValue:"Job title" ,
        labelClassName:"block uppercase tracking-wide text-font-color text-xs font-bold mb-2",
        placeholder:"ex. UX/UI Designer",
        className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    },
    company_name: {
        label:"true" ,
        value: '',
        field: 'company_name',
        index: 1,
        required: true,
        invalid: true,
        errorMessage: 'This filed is required',
        labelValue:"Company Name" ,
        labelClassName:"block uppercase tracking-wide text-font-color text-xs font-bold mb-2",
        placeholder:"ex. Google",
        className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    },
    industry: {
        label:"true",
        value: '',
        field: 'industry',
        index: 2,
        required: true,
        invalid: true,
        errorMessage: 'This filed is required',
        labelValue:"Industry" ,
        labelClassName:"block uppercase tracking-wide text-font-color text-xs font-bold mb-2",
        placeholder:"ex. UX/UI Designer",
        className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    },
    location: {
        label:"true",
        value: '',
        labelValue:"Location",
        field: 'location',
        index: 3,
        labelClassName:"block uppercase tracking-wide text-font-color text-xs font-bold mb-2",
        placeholder:"ex. Chennai",
        className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    },
    remote_type: {
        label:"true",
        value: '',
        field: 'remote_type',
        index: 4,
        labelValue:"Remote type" ,
        labelClassName:"block uppercase tracking-wide text-font-color text-xs font-bold mb-2",
        placeholder:"ex. In-office",
        className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    },
    min_experience: {
        label:"true",
        value: '',
        field: 'min_experience',
        index: 5,
        labelValue:"Experience" ,
        labelClassName:"block uppercase tracking-wide text-font-color text-xs font-bold mb-2",
        placeholder:"Minimum",
        className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    },
    max_experience: {
        placeholder:"Maximum",
        value: '',
        index: 6,
        field: 'max_experience',
        className:"mt-6 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    },
    min_salary: {
        label:"true",
        value: '',
        index: 7,
        labelValue:"Salary",
        field: 'min_salary',
        labelClassName:"block uppercase tracking-wide text-font-color text-xs font-bold mb-2",
        placeholder:"Minimum",
        className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    },
    max_salary: {
        placeholder:"Maximum",
        value: '',
        index: 8,
        field: 'max_salary',
        className:"mt-6 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    },
    total_employee: {
        label:"true" ,
        value: '',
        index: 9,
        field: 'total_employee',
        labelValue:"Total employee" ,
        labelClassName:"block uppercase tracking-wide text-font-color text-xs font-bold mb-2",
        placeholder:"ex. 100",
        className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    },
    apply_type: {
        label:"true" ,
        labelValue:"Apply type" ,
        field: 'apply_type',
        index: 10,
        type: 'radio',
        labelClassName:"block uppercase tracking-wide text-font-color text-xs font-bold mb-2",
        radioOptions: [
            {
                id:1,
                className: 'm-2',
                name: 'applyType',
                label: 'Quick apply',
                value: false
            },
            {
                id:2,
                className: 'm-2',
                name: 'applyType',
                label: 'External apply',
                value: false
            }
        ]
    }
}
