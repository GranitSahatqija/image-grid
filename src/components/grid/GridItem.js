import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

const GridItem = (props) => {
    const { item, open } = props
    const ref = useRef()

    useEffect(() => {
        // check if intersection observer is supported
        // attach observer to element
        if (('IntersectionObserver' in window) &&
            ('IntersectionObserverEntry' in window) &&
            ('intersectionRatio' in window.IntersectionObserverEntry.prototype)) {
            ref.current.classList.add('animation-supported')
            const callback = (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in')
                    } else {
                        entry.target.classList.remove('fade-in')
                    }
                });
            };

            const options = {
                threshold: 0.4
            }

            const observer = new IntersectionObserver(callback, options);
            observer.observe(ref.current);

            return () => observer.disconnect()
        }
    }, [ref])

    return (
        <div className="grid__item" onClick={() => open(item)} ref={ref}>
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