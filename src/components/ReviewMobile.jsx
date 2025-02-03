import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import CustomizedHeading from "./CustomizedHeading";

function ReviewMobile({ reviewCards }) {
  const [step, setStep] = useState(0);

  function handlePrevious() {
    if (step > 0) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < reviewCards.length - 1) setStep((s) => s + 1);
  }

  return (
    <div className="reviews-mobile">
      <SectionHeading>what they said about us</SectionHeading>
      <CustomizedHeading>
        <div>Loved by our clients </div>
      </CustomizedHeading>

      <section className="review-container-mobile">
        <div className="review-card">
          <div className="review-card-quote">
            <img
              src={reviewCards[step].quote}
              alt="quote"
              width="100"
              height="100"
            />
          </div>

          <div className="review-card-profile">
            <div className="review-card-profile-img">
              <img
                src={reviewCards[step].src}
                alt="avatar"
                width="100"
                height="100"
              />
            </div>

            <div className="review-card-profile-name-title">
              <h3 className="review-card-profile-name">
                {reviewCards[step].name}
              </h3>
              <p className="review-card-profile-title">
                {reviewCards[step].title}
              </p>
            </div>
          </div>

          <p className="review-card-text">{reviewCards[step].review}</p>

          <div className="review-btn">
            <button onClick={handlePrevious} disabled={step === 0}>
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={step === reviewCards.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReviewMobile;
