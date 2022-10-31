import ErrorRepository from '../err';

test('Test known error', () => {
  const error = new ErrorRepository();
  error.add(101, 'Ошибка ввода');
  expect(error.translate(101)).toBe('Ошибка ввода');
});

test('Test unknown error', () => {
  expect(new ErrorRepository().translate(102)).toBe('Unknown error');
});