import CustomizedHeading from "./CustomizedHeading";
import SectionHeading from "./SectionHeading";

const reviewCards = [
  {
    quote: "/quote.png",
    src: "/avatar.png",
    name: "Jacob Esau",
    title: "CEO Cellulant group",
    review:
      "Ensure your organization is prepared to meet the highest standards of cybersecurity compliance. Our readiness assessments identify gaps and provide actionable recommendations",
  },
  {
    quote: "/quote.png",
    src: "/avatar.png",
    name: "Jacob Esau",
    title: "CEO Cellulant group",
    review:
      "Ensure your organization is prepared to meet the highest standards of cybersecurity compliance. Our readiness assessments identify gaps and provide actionable recommendations",
  },
  {
    quote: "/quote.png",
    src: "/avatar.png",
    name: "Jacob Esau",
    title: "CEO Cellulant group",
    review:
      "Ensure your organization is prepared to meet the highest standards of cybersecurity compliance. Our readiness assessments identify gaps and provide actionable recommendations",
  },
  {
    quote: "/quote.png",
    src: "/avatar.png",
    name: "Jacob Esau",
    title: "CEO Cellulant group",
    review:
      "Ensure your organization is prepared to meet the highest standards of cybersecurity compliance. Our readiness assessments identify gaps and provide actionable recommendations",
  },
  {
    quote: "/quote.png",
    src: "/avatar.png",
    name: "Jacob Esau",
    title: "CEO Cellulant group",
    review:
      "Ensure your organization is prepared to meet the highest standards of cybersecurity compliance. Our readiness assessments identify gaps and provide actionable recommendations",
  },
  {
    quote: "/quote.png",
    src: "/avatar.png",
    name: "Jacob Esau",
    title: "CEO Cellulant group",
    review:
      "Ensure your organization is prepared to meet the highest standards of cybersecurity compliance. Our readiness assessments identify gaps and provide actionable recommendations",
  },
];

function Reviews() {
  return (
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

            <p className="review-card-text">{card.review}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Reviews;
