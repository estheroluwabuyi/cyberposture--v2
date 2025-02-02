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
    <div className="footer-cases">
      {links.map((l, i) => (
        <ul className="" key={index}>
          <li>
            <a href="#"></a>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default FooterCases;
