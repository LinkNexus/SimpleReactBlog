import {Button} from "./Button.jsx";

/**
 * @param {string} image
 * @param {string} title
 * @param {string} description
 * @param {string} href
 * @param {string} buttonLabel
 * @returns {JSX.Element}
 */
export function Card({
    image,
    title,
    description,
    href,
    buttonLabel
}) {
    const showImage = !!(href && buttonLabel);
    return (
        <div className="card">
            {image && <img src={image} className="card-img-top" alt=""/>}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                {showImage && <Button variant="primary" href={href}>{buttonLabel}</Button>}
            </div>
        </div>
    );
}