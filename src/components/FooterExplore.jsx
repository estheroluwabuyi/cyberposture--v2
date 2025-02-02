const links = [
  {
    link: "Design",
  },
  {
    link: "Prototyping",
  },
  {
    link: "Development features",
  },
  {
    link: "Design systems",
  },
  {
    link: "Collaboration features",
  },
  {
    link: "Design process",
  },
  {
    link: "FigJam",
  },
];

function FooterExplore() {
  return (
    <div className="footer-explore footer-links">
      <h4 className="footer-links-header">Explore</h4>
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

export default FooterExplore;
