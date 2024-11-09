import { fetchItems } from './dynamic-shopping-list-main/script.js';

// global.fetch = jest.fn(() =>
//     Promise.resolve({
//         json: () => Promise.resolve({ success: true }),
//     })
// );

// beforeEach(() => {
//     jest.clearAllMocks();
// });
 
beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({
            message: {
                content: JSON.stringify([{ item: 'bread', category: 'Bakery' }])
            }
        })
    });
    jest.clearAllMocks();
});

it('should make a fetch POST request with the correct options', async () => {
    const shoppingList = [{ item: 'bread', category: 'Bakery' }];
    const url = 'http://localhost:3000/';
    const response = await fetchItems(url, shoppingList);
    
    // await fetchItems();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(shoppingList)
    });
    expect(response).toEqual({ success: true });
});
