import PropTypes from 'prop-types';

const GridItem = (props) => {
    const { item, open } = props

    return (
        <div className="grid__item" onClick={() => open(item)}>
            <figure>
                <img src={item.url} alt={item.title} loading="lazy" />
                <figcaption>{item.title}</figcaption>
            </figure>
        </div>
    )
}

GridItem.propTypes = {
    item: PropTypes.object.isRequired,
    open: PropTypes.func.isRequired
}

export default GridItem