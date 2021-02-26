test('creates a health potion object', () => {
  const potion = new potion('health');

  expect(potion.name).toBe('health');
  expect(potion.value).toEqual(expect.any(Number));
});