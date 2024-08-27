import { Link } from 'react-router-dom';
import { LoginBG } from '../../styles';
import { ForgotPasswordForm } from './Forms';

const ForgotPassword = () => (
    <LoginBG className="login-signup">
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-xl-6 col-lg-7 col-sm-12 col-12 aloa-bg-color">
                    <div className="aloa-content">
                        <div className="aloa-header">
                            <div className="aloa-logo">
                                <img src={require("../../assets/logo-dark.png")} alt="Logo" />
                            </div>
                            <h5>Recover your password</h5>
                        </div>
                        <div className="aloa-form">
                            <ForgotPasswordForm />
                        </div>
                        <div className="aloa-footer">
                            <div className="">
                                <p>
                                    Don't have an account?
                                    <Link to="/register" className="switcher-text2">Register</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </LoginBG>
)

export default ForgotPassword;