function LoginBtn(props) {
    const { color, name } = props

    return (
        <button className="btn btn-primary" type="button" style={{ backgroundColor: color }}>
            <i className={`bi bi-${name.toLowerCase()}`}></i>
            Login using {name}
        </ button >
    );
}

export default LoginBtn;