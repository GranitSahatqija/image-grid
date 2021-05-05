const GridItem = ({url, title}) => {
    return (
        <div className="grid__item">
            <figure>
                <img src={url} alt={title} loading="lazy" />
                <figcaption>{title}</figcaption>
            </figure>
        </div>
    )
}

export default GridItem