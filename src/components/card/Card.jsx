import './Card.css';

const Card = ({
    children,
    title,
    icon,
    variant = 'default',
    animate = false,
    delay = 0,
    className = ''
}) => {
    const cardClasses = [
        'card',
        `card-${variant}`,
        animate ? 'card-animate' : '',
        className
    ].filter(Boolean).join(' ');

    const style = animate ? { animationDelay: `${delay}ms` } : {};

    return (
        <div className={cardClasses} style={style}>
            {(title || icon) && (
                <div className="card-header">
                    {icon && <div className="card-icon">{icon}</div>}
                    {title && <h3 className="card-title">{title}</h3>}
                </div>
            )}
            <div className="card-content">
                {children}
            </div>
        </div>
    );
};

export default Card;
