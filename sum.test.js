import sum from './sum';

test('adds', async () => {
	expect(await sum(1,2)).toBe(3);
});