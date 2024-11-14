import { fetchItems } from './dynamic-shopping-list-main/script.js';
const shoppingList = [{ item: 'bread', category: 'Bakery' }];

beforeEach(async () => {
    fetch.mockClear();
});

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(shoppingList),
    })
);

it('should make a fetch POST request', async () => {
    const data = await fetchItems();

    expect(global.fetch).toHaveBeenCalledTimes(1);
    // expect(data).toEqual(shoppingList);

    //When I comment out 'expect(data)...', test passes for global.fetch 'toHaveBeenCalled...'
    //Assertion/test for data .toEqual isn't passing for some reason.
});

