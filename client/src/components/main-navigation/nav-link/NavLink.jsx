
function NavLink(props) {
    const {href, children, linkStyle} = props;
  return (
    <a 
    className={linkStyle}
    href={href}>
       {children} 
    </a>
  )
}

export {NavLink}