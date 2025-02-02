const links = [
  {
    link: "UI design",
  },
  {
    link: "UX design",
  },
  {
    link: "Wireframing",
  },
  {
    link: "Diagramming",
  },
  {
    link: "Brainstorming",
  },
  {
    link: "Online whiteboard",
  },
  {
    link: "Team collaboration",
  },
];

function FooterCases() {
  return (
    <div className="footer-cases footer-links">
      <h4 className="footer-links-header">Use cases</h4>
      {links.map((l, i) => (
        <ul className="footer-links-lists" key={i}>
          <li>
            <a href="#">{l.link}</a>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default FooterCases;
