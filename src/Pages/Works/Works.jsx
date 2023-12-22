import { PiArrowBendDoubleUpRightFill } from "react-icons/pi";

const Works = () => {
    return (
          <div className=" max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 my-32" id="work" data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
      <div className="card max-w-[2520px] bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-4xl font-semibold text-center">How it works</h2>
          <p className="text-center text-gray-400">Premium designs, unlimited requests, super fast delivery, for one flat monthly fee.</p>
        </div>
        <div className="lg:flex justify-evenly items-center gap-5 my-20 text-center">
            <div>
                <h1 className="text-4xl font-bold">Create Task</h1>
                <p className="text-gray-500 text-md">Subscribe to a plan & you’ll get an instant <br /> access to your private Slack channel.</p>
            </div>
            <div className="text-5xl text-gray-600 px-40 py-3 md:px-0 lg:px-0">
            <PiArrowBendDoubleUpRightFill />
            </div>
            <div>
                <h1 className="text-4xl font-bold">Edit Task</h1>
                <p className="text-gray-500 text-md">Submit any number of requests. We will work <br /> through them, one at a time, ensuring consistent <br /> updates every 24-48 hours.</p>
            </div>
            <div className="text-5xl text-gray-600 px-40 py-3 md:px-0 lg:px-0">
            <PiArrowBendDoubleUpRightFill />
            </div>
            <div>
                <h1 className="text-4xl font-bold">Complete Task</h1>
                <p className="text-gray-500 text-md">Need changes? We guarantee unlimited <br /> revisions until you are 200% satisfied.</p>
            </div>
        </div>
      </div>
    </div>
    );
};

export default Works;