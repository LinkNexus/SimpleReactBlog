/**
 * @param {"danger" | "info" | "warning"} type
 * @param {string} message
 * @returns {JSX.Element}
 */
export function Alert({type = "info", children}) {
    return (
        <div className={`alert alert-${type}`} role="alert">
            {children}
        </div>
    )
}