import "./login.component.css";

export function LoginComponentBootstrap() {
    return (
        <div className="login-container">
            <form action="" className="login-form alert alert-warning alert-dismissible">
                <h2 className="bi bi-person-fill">User Login</h2>
                <button className="btn btn-close" type="button"data-bs-dismiss="alert"></button>
                <dl>
                    <dt>User Name</dt>
                    <dd>
                        <input type="text" className="form-control"/>
                    </dd>
                    <dt>Password</dt>
                    <dd>
                        <input type="password" className="form-control"/>
                    </dd>
                </dl>
                <button className="btn btn-warning w-100">Login</button>
            </form>
        </div>
    )
}