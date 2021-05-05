import { useState, Suspense, lazy } from 'react';
import { getGridItems } from '../../helpers';
import GridItem from './GridItem';
import '../../styles/components/grid.scss';

const GridPopup = lazy(() => import('./GridPopup'));

const Grid = () => {
    const gridItems = getGridItems(18);
    const [popupItem, setPopupItem] = useState(false)

    const openPopup = (image) => {
        setPopupItem(image)
    }

    const closePopup = (image) => {
        setPopupItem(false)
    }

    return (
        <section className="grid">
            <div className="grid__inner">
                {gridItems.map((item) => {
                    return (
                        <GridItem key={item.id} item={item} open={openPopup} />
                    )
                })}
            </div>
            {popupItem && 
                <Suspense fallback={<div>Loading...</div>}>
                    <GridPopup item={popupItem} close={closePopup} />
                </Suspense>
            }
        </section>
    )
}

export default Grid