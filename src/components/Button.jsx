/**
 * @param {"primary" | "secondary" | "danger"} variant
 * @returns {JSX.Element}
 */
export function Button({variant = "primary", ...props}) {
    const newProps = {
        ...props,
        className: `btn btn-${variant} mb-3`
    };

    if (props.href)
        return (<a {...newProps} />);

    return (<button {...newProps} />)
}