import Lottie from "lottie-react";
import animation from './contact.json'

const Contact = () => {
    return (
        <div className=" max-w-[1200px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4" data-aos="fade-up"
    data-aos-anchor-placement="center-bottom">
      <div className="my-48" id="contacts">
        <h2 className="text-5xl font-bold text-center p-5">Get in Touch</h2>
        <h5 className="text-center text-sm text-gray-400 font-semibold mb-5">
          Start your 30-day free trial. Cancel anytime.
        </h5>
        <div className="flex flex-col items-center justify-center lg:flex-row-reverse">
          <div className="hero">
            <div className="hero-content flex-col ">
              <div className="card w-full lg:w-[900px] max-w-sm shadow-2xl bg-base-100">
                <form className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      name="name"
                      type="name"
                      placeholder="abc"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="email@gmail.com"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Message</span>
                    </label>
                    <textarea
                      type="text"
                      name="message"
                      className="textarea textarea-bordered"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn bg-black text-white">
                      Contact Us
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="w-96 lg:w-[550px]">
            <Lottie loop={true} animationData={animation}></Lottie>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Contact;