import { getGridItems } from '../helpers'
import GridItem from './GridItem'

const Grid = () => {
    const gridItems = getGridItems(18);

    return (
        <div className='grid'>
            <div className='grid__inner'>
                {gridItems.map((item) => {
                    return (
                        <GridItem key={item.id} url={item.url} title={item.title} />
                    )
                })}
            </div>
        </div>
    )
}

export default Grid