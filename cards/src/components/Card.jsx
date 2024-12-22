import './card.css';

function Card({ img, title, link, children }) {
    return (
        <div className="card">
            {img &&
                <img src={img} alt={title} title={title} className="card-img-top" />
            }
            <div className="card-body">
                {title &&
                    <h5 className="card-title">{title}</h5>
                }
                <p className="card-text">
                    {children}
                </p>
                {link && link.url && link.text &&
                    <a href={link.url} className="card-link">{link.text}</a>
                }
            </div>
        </div>
    )
}

export default Card;