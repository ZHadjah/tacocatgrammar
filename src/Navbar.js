import { Link, useMatch, useResolvedPath } from "react-router-dom";

export const openInNewTab = (url) => {
  console.log(url.toString())
  window.open(url, '_blank');
  //if (newWindow) newWindow.opener = null;
};

function Navbar({githubLink, portfolioLink})  {
  return (
    <nav className="nav">
      <Link>TacocatGrammar</Link>
      <ul>
        <CustomLink to="/">🌮Home</CustomLink>
        <CustomLink to="/solve">🌮Solve</CustomLink>
        <CustomLink to="/code">🌮Code</CustomLink>
        <Link githubLink={githubLink} onClick = {() => openInNewTab(githubLink)} >🌮Github</Link>
        <Link portfolioLink={portfolioLink} onClick = {() => openInNewTab(portfolioLink)} >🌮Portfolio</Link>
      </ul>
    </nav>
  )
}

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};
export default Navbar;


