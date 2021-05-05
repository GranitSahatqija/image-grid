const dimensions = ['200x150', '150x200'];

const getGridItems = (nr_of_items = 10) => {
    const items = [...Array(nr_of_items)].map((v, i) => {
        return {
            id: i,
            title: `Image grid item ${i + 1}`,
            url: `https://via.placeholder.com/${(i % 2 === 0 || i % 3 === 0) ? dimensions[0] : dimensions[1]}`
        }
    })

    return items;
}

export {
    getGridItems
}