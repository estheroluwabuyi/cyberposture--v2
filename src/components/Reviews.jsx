import CustomizedHeading from "./CustomizedHeading";
import SectionHeading from "./SectionHeading";
import ReviewMobile from "./ReviewMobile";

const reviewCards = [
  {
    quote: "/quote.png",
    src: "/avatar.png",
    name: "Jacob Esau",
    title: "CEO Cellulant Group",
    review:
      "Ensure your organization is prepared to meet the highest standards of cybersecurity compliance. Our readiness assessments identify gaps and provide actionable recommendations.",
  },
  {
    quote: "/quote.png",
    src: "/avatar.png",
    name: "Emily Johnson",
    title: "CTO of FinTech Co",
    review:
      "We’ve significantly improved our security posture thanks to this team's expertise and insights. Highly recommended!",
  },
  {
    quote: "/quote.png",
    src: "/avatar.png",
    name: "Michael Lee",
    title: "Head of IT, SecureNet",
    review:
      "Professional, thorough, and insightful. The recommendations were spot on and easy to implement.",
  },
  {
    quote: "/quote.png",
    src: "/avatar.png",
    name: "Sarah Thompson",
    title: "CISO at DataShield",
    review:
      "A must-have service for any organization serious about cybersecurity. Their guidance was invaluable!",
  },
  {
    quote: "/quote.png",
    src: "/avatar.png",
    name: "David Brown",
    title: "Security Analyst, CyberSafe",
    review:
      "Clear, concise, and effective security recommendations that made a real impact on our compliance efforts.",
  },
  {
    quote: "/quote.png",
    src: "/avatar.png",
    name: "Linda Martinez",
    title: "VP of Risk Management, TrustBank",
    review:
      "Their cybersecurity assessment gave us the confidence to move forward with our digital transformation securely.",
  },
];

function Reviews() {
  return (
    <section className="reviews-screens">
      <div className="reviews-mobile">
        <ReviewMobile reviewCards={reviewCards} />
      </div>

      <div className="reviews">
        <SectionHeading>what they said about us</SectionHeading>
        <CustomizedHeading>
          <div>Loved by our clients </div>{" "}
        </CustomizedHeading>

        <section className="review-container">
          {reviewCards.map((card, index) => (
            <div key={index} className="review-card">
              <div className="review-card-quote">
                <img src={card.quote} alt="quote" width="100" height="100" />
              </div>

              <div className="review-card-profile">
                <div className="review-card-profile-img">
                  <img src={card.src} alt="avatar" width="100" height="100" />
                </div>

                <div className="review-card-profile-name-title">
                  <h3 className="review-card-profile-name">{card.name}</h3>
                  <p className="review-card-profile-title">{card.title}</p>
                </div>
              </div>

              <p className=" review-card-text">{card.review}</p>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}

export default Reviews;
