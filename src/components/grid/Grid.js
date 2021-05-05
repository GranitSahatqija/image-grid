import React, { useState } from 'react';
import { getGridItems } from '../../helpers'
import GridItem from './GridItem'
import GridPopup from './GridPopup'

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
        <div className="grid">
            <div className="grid__inner">
                {gridItems.map((item) => {
                    return (
                        <GridItem key={item.id} item={item} open={openPopup} />
                    )
                })}
            </div>
            {popupItem && <GridPopup item={popupItem} close={closePopup} />}
        </div>
    )
}

export default Grid