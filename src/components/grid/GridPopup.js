import { useEffect } from 'react';

const GridPopup = ({ item, close }) => {
    // disable/enable page scrolling when popup is open/closed
    useEffect(() => {
        document.body.classList.add('no-scroll')
        return () => {
            document.body.classList.remove('no-scroll')
        }
    }, [])

    // close popup with escape key
    useEffect(() => {
        const keyHandler = function (event) {
            if (event.key === 'Escape') {
                close()
            }
        }
        window.addEventListener('keydown', keyHandler)
        return () => {
            window.removeEventListener('keydown', keyHandler)
        }
    }, [close])

    return (
        <div className="grid__popup">
            <div className="grid__popup-inner">
                <button type="button" aria-label="close gallery" className="grid__popup-close" onClick={() => close()} >close</button>
                <figure>
                    <img src={item.url} alt={item.title} loading="lazy" />
                    <figcaption>{item.title}</figcaption>
                </figure>
            </div>
        </div>
    )
}

export default GridPopup