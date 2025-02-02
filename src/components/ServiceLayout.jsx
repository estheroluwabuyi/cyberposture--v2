import SectionHeading from "./SectionHeading";
import CustomizedHeading from "./CustomizedHeading";

const serviceCards = [
  {
    title: "Compliance Readiness and Self-Assessments",
    texts:
      "Ensure your organization is prepared to meet the highest standards of cybersecurity compliance. Our readiness assessments identify gaps and provide actionable recommendations.",
  },
  {
    title: "Security Architecture and Design",
    texts:
      "Build a resilient security infrastructure with our expert guidance. We design security frameworks that integrate seamlessly with your business operations, providing robust protection against threats.",
  },
  {
    title: "Ransomware Susceptibility Assessment",
    texts:
      "Identify vulnerabilities and fortify your defenses against ransomware attacks. Our assessments help you understand your risk and implement effective prevention strategies.",
  },
  {
    title: "Technical Security Standards",
    texts:
      "Adopt industry best practices with our technical security standards services. We help you develop and implement standards that ensure your systems and processes are secure.",
  },
  {
    title: "Business Impact Assessment",
    texts:
      "Understand the potential impact of disruptions on your operations. Our assessments provide insights into critical business functions and guide you in developing effective continuity plans.",
  },
  {
    title: "Merger And Acquisition Due Diligence",
    texts:
      "Ensure your mergers and acquisitions are secure with our due diligence services. We identify cybersecurity risks and provide recommendations to protect your investments.",
  },
];

function ServiceLayout() {
  return (
    <section className="service">
      <SectionHeading>what we offer</SectionHeading>
      <CustomizedHeading>
        <div>We Provide Expert cybersecurity </div> solutions tailored to your
        unique needs, ensuring Compliance and robust protection against emerging
        threats
      </CustomizedHeading>

      <div className="service-container">
        {serviceCards.map((card, index) => (
          <div key={index} className="service-card">
            <h3 className="service-card-title">{card.title}</h3>
            <p className="service-card-texts">{card.texts}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceLayout;
