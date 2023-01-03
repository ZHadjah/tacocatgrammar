import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function Navbar() {
  return;
  <nav className="nav">
    <Link>TacocatGrammar</Link>
    <ul>
      <CustomLink to="/solve">Solve</CustomLink>
      <CustomLink to="/code">Code</CustomLink>
      <CustomLink to="#">Github</CustomLink>
      <CustomLink to="#">portfolio</CustomLink>
    </ul>
  </nav>;
}

function CustomLink({ to, children, ...props }) {
  
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children} 
      </Link>
    </li>
  )
}