export default function JobCard(props) {
    const {
      title,
      companyName,
      industry,
      applyType,
      location,
      minSalary,
      maxSalary,
      minExperience,
      maxExperience,
      totalEmployees,
    } = props.cardDetails;
  
    return (
      <div className="w-full rounded-xl p-4 shadow-2xl shadow-blue-200 bg-white">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="grid-cols-1 lg:col-span-1">
            <div className="mx-auto flex h-[50px] w-[50px] items-center rounded-full bg-blue-100">
              <img src={require('../assets/n-logo.png')}></img>
            </div>
          </div>
  
          <div className="col-span-1 lg:col-span-11">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-zinc-700">{title}</h2>
              <p className="font-semibold text-zinc-700">
                {companyName} - {industry}
              </p>
              <p className="text-zinc-500">{location}</p>
            </div>
  
            <div className="mt-4 text-center lg:text-left">
              <p className="text-zinc-500">Part-Time (9.00AM - 5.00PM IST)</p>
              <p className="text-zinc-500">
                Experience ({minExperience}-{maxExperience} Years)
              </p>
              <p className="text-zinc-500">
                INR(Rupee) {minSalary}-{maxSalary} / Month
              </p>
              <p className="text-zinc-500">{totalEmployees} employees</p>
            </div>
  
            <div className="mt-4 grid grid-cols-2 gap-4">
              {applyType === 'internal' && (
                <button className="w-full rounded-xl border-2 border-primary-color bg-primary-color px-3 py-2 font-semibold text-white-color">
                  Apply Now
                </button>
              )}
              {applyType !== 'internal' && (
                <button className="w-full rounded-xl border-2 border-primary-color bg-white-color px-3 py-2 font-semibold text-primary-color">
                  External Apply
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  