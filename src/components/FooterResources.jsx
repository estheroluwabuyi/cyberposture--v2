const links = [
  {
    link: "Blog",
  },
  {
    link: "Best practices",
  },
  {
    link: "Colors",
  },
  {
    link: "Color wheel ",
  },
  {
    link: "Support",
  },
  {
    link: "Developers",
  },
  {
    link: "Resource library",
  },
];

function FooterResources() {
  return (
    <div className="footer-resources footer-links">
      <h4 className="footer-links-header">Resources</h4>
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

export default FooterResources;
