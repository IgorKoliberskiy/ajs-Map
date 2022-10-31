export default class ErrorRepository {
  constructor() {
    this.map = new Map([
      [101, 'Ошибка ввода'],
    ]);
  }

  add(number, string) {
    this.map.set(number, string);
  }

  translate(code) {
    if (this.map.has(code)) {
      return this.map.get(code);
    }
    return 'Unknown error';
  }
}