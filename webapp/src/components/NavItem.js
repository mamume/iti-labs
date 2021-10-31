function NavItem(props) {
    const { href, title } = props

    return (
        <a className="nav-link" aria-current="page" href={href}>{title}</a>
    );
}

export default NavItem;