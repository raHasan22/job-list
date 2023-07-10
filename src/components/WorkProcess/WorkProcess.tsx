import CategoryList from '../CategoryList/CategoryList';
export default function WorkProcess() {
  return (
    <div className="px-2 py-8">
      <div className="text-center">
        <h1 className="text-4xl lg:text-5xl font-serif text-white my-4">
          JOBES <span className="text-cyan-500">Working</span> process
        </h1>
        <p className="font-mono">
          Step By Step working process for new joiners
        </p>
      </div>
      <div className="my-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-10 text-center">
          <div className="flex flex-col justify-center items-center bg-[#001618] rounded w-full h-52">
            <div className="h-20 w-20 rounded-full p-2 border-gray-600 hover:border-[#0fa5a8] border-r-2 border-l-2 mb-5">
              <div className="bg-[#062224] p-3 rounded-full h-full">
                <img
                  className=""
                  width="100%"
                  height="100%"
                  src="assets/process/home6-account-icon.svg"
                />
              </div>
            </div>
            <h4 className="text-xl mb-2 hover:text-[#0aa8ab]">
              Account Create
            </h4>
            <p className="text-sm px-2">At first need to create account</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-[#001618] rounded w-full h-52">
            <div className="h-20 w-20 rounded-full p-2 border-gray-600 hover:border-[#0fa5a8] border-r-2 border-l-2 mb-5">
              <div className="bg-[#062224] p-3 rounded-full h-full">
                <img
                  className=""
                  width="100%"
                  height="100%"
                  src="assets/process/home6-create-resume-icon.svg"
                />
              </div>
            </div>
            <h4 className="text-xl mb-2 hover:text-[#0aa8ab]">
              Create Resume
            </h4>
            <p className="text-sm px-2">To create your resume be confident & safely.</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-[#001618] rounded w-full h-52">
            <div className="h-20 w-20 rounded-full p-2 border-gray-600 hover:border-[#0fa5a8] border-r-2 border-l-2 mb-5">
              <div className="bg-[#062224] p-3 rounded-full h-full">
                <img
                  className=""
                  width="100%"
                  height="100%"
                  src="assets/process/home6-find-job-icon.svg"
                />
              </div>
            </div>
            <h4 className="text-xl mb-2 hover:text-[#0aa8ab]">
              Find Jobs
            </h4>
            <p className="text-sm px-2">Find accounts by CategoryList</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-[#001618] rounded w-full h-52">
            <div className="h-20 w-20 rounded-full p-2 border-gray-600 hover:border-[#0fa5a8] border-r-2 border-l-2 mb-5">
              <div className="bg-[#062224] p-3 rounded-full h-full">
                <img
                  className=""
                  width="100%"
                  src="assets/process/home6-apply-jobs-icon.svg"
                />
              </div>
            </div>
            <h4 className="text-xl mb-2 hover:text-[#0aa8ab]">
              Apply Job
            </h4>
            <p className="text-sm px-2">Apply to your desired jobs with a good resume for better response</p>
          </div>
        </div>
      </div>
    </div>
  );
}
