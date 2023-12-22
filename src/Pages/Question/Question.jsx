

const Question = () => {
    return (
        <div className="my-20" id="faq" data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
          <h1 className="text-4xl font-bold text-center p-5">
            Frequently asked questions
          </h1>
          <p className="text-md font-semibold text-gray-400 text-center pb-5 px-5">
            Everything you need to know about the product and billing.
          </p>
          <div className="max-w-[800px]  mx-auto">
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" checked="checked" />
              <div className="collapse-title text-xl font-medium">
                Is there a free trial available?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding call to
                  get you up and running as soon as possible.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Can I change my plan later?
              </div>
              <div className="collapse-content">
                <p>
                  Certainly! Yes, you can change your plan anytime to accommodate
                  your evolving needs. Simply log in and navigate to Account
                  Settings to modify your subscription.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                What is your cancellation policy?
              </div>
              <div className="collapse-content">
                <p>
                  Our cancellation policy allows you to cancel your subscription at
                  any time without any hassles. Simply log in to your account, go to
                  Account Settings, and follow the cancellation instructions. No
                  hidden fees or commitments we make it easy for you to manage your
                  subscription.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Can other info be added to an invoice?
              </div>
              <div className="collapse-content">
                <p>
                  Certainly! Depending on your invoicing platform, you can usually
                  add extra details like project descriptions or payment
                  instructions for customization.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                How does billing work?
              </div>
              <div className="collapse-content">
                <p>
                  Billing is recurring based on your chosen plan, with charges at
                  specified intervals. Manage details in your account settings or
                  contact support for assistance.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                How do I change my account email?
              </div>
              <div className="collapse-content">
                <p>
                  To change your account email, log in and navigate to Account
                  Settings. Look for the option to update your email address, make
                  the change, and save. If you encounter any issues, reach out to
                  our support team for assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Question;