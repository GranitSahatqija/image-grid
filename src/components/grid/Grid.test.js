import renderer from 'react-test-renderer';
import GridItem from './GridItem'
import GridPopup from './GridPopup'

test('Grid renders correctly', () => {
    const itemProps = {
        id: 1,
        title: 'Title',
        url: 'https://via.placeholder.com/200x150'
    }

    const gridItem = renderer
        .create(<GridItem item={itemProps} open={jest.fn(() => {})} />)
        .toJSON();
    expect(gridItem).toMatchSnapshot();

    const gridPopup = renderer
        .create(<GridPopup item={itemProps} close={jest.fn(() => {})}  />)
        .toJSON();
    
    expect(gridPopup).toMatchSnapshot();
});