import { Link } from 'react-router-dom';


function NavItem(props) {
    const { title } = props

    return (
        <Link className="nav-link" to={`/${title.replace(/\s/g, '')}`}>
            {title}
        </Link>
    );
}

export default NavItem;