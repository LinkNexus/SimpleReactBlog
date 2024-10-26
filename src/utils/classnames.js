/**
 * @param {boolean} condition
 * @param {?string} className
 */
export function activeClassIf(condition, className = null) {
    if (!condition)
        return className;

    if (!className)
        return "active";

    return `active ${className}`;
}