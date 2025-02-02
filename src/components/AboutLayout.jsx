import { useState } from "react";
import CustomizedHeading from "./CustomizedHeading";
import SectionHeading from "./SectionHeading";

const aboutCards = [
  {
    src: "/icon-1.png",
    alt: "icon",
    title: "Proactive Approach",
    texts:
      "We stay ahead of emerging threats to ensure your organization is always protected.",
  },
  {
    src: "/icon-2.png",
    alt: "icon",
    title: "Expertise",
    texts:
      "Our team of seasoned professionals brings deep industry knowledge and experience.",
  },
  {
    src: "/icon-3.png",
    alt: "icon",
    title: "Tailored Solutions",
    texts:
      "We understand that every organization is unique. Our solutions are customized to meet your specific needs.",
  },
  {
    src: "/icon-4.png",
    alt: "icon",
    title: "Commitment to Excellence",
    texts:
      "We are dedicated to delivering the highest quality services and achieving the best outcomes for our clients.",
  },
];

function AboutLayout() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="about">
      <SectionHeading>How we work</SectionHeading>
      <CustomizedHeading>
        <div>We ensure your organization is protected</div> against evolving
        threats and meets all regulatory requirements.
      </CustomizedHeading>

      <div className="about-container">
        {aboutCards.map((card, index) => (
          <div
            key={index}
            className="about-card"
            onMouseEnter={() => setActiveId(index)}
            onMouseLeave={() => setActiveId(null)}
            onTouchStart={() => setActiveId(index)}
          >
            <div className="about-card-img">
              <img
                src={card.src}
                alt={card.alt}
                width="200"
                height="200"
                className={activeId === index ? "about-card-active" : ""}
              />
            </div>

            <div className="about-card-mainTexts">
              <h4 className="about-card-title">{card.title}</h4>
              <p className="about-card-texts">{card.texts}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutLayout;
