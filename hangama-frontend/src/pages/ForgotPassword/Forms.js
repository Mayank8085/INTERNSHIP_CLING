export const ForgotPasswordForm = () => {
    return (
        <form method="POST">
            <div className="form-group">
                <div className="">
                    <input type="email" id="email" className="form-control" name="email"
                        placeholder="Email" required="required" />
                </div>
            </div>
            <div className="form-group">
                <div className="">
                    <button type="submit" className="aloa-btn-fill">Send Me Email</button>
                </div>
            </div>
        </form>
    )
}