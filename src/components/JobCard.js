

export default function JobCard(props) {
  const { index, editJob } = props;
    const {
      job_title,
      company_name,
      industry,
      apply_type,
      location,
      min_salary,
      max_salary,
      min_experience,
      max_experience,
      total_employee,
    } = props.cardDetails;

    return (
      <div className="w-full rounded-xl p-4 shadow-2xl shadow-blue-200 bg-white flex">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="grid-cols-1 lg:col-span-1">
            <div className="mx-auto flex h-[50px] w-[50px] items-center rounded-full bg-blue-100">
              <img alt='edit' src={require('../assets/n-logo.png')}></img>
            </div>
          </div>
  
          <div className="col-span-1 lg:col-span-11">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-zinc-700">{job_title}</h2>
              <p className="font-semibold text-zinc-700">
                {company_name} - {industry}
              </p>
              <p className="text-zinc-500">{location}</p>
            </div>
            
            <div className="mt-4 text-center lg:text-left">
              <p className="text-zinc-500">Part-Time (9.00 AM - 5.00 PM IST)</p>
              <p className="text-zinc-500">
                Experience ({min_experience}-{max_experience} Years)
              </p>
              <p className="text-zinc-500">
                INR (₹) {min_salary}-{max_salary} / Month
              </p>
              <p className="text-zinc-500">{total_employee} employees</p>
            </div>
  
            <div className="mt-4">
              {apply_type === 'internal' && (
                <button className="rounded border-2 border-primary-color bg-primary-color px-3 py-2 font-semibold text-white-color">
                  Apply Now
                </button>
              )}
              {apply_type === 'external' && (
                <button className="rounded border-2 border-primary-color bg-white-color px-3 py-2 font-semibold text-primary-color">
                  External Apply
                </button>
              )}
            </div>
          </div>
        </div>
        <div>
          <svg  onClick={() => editJob(index)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>
        </div>
      </div>
    );
  }
  