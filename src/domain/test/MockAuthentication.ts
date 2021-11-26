export default class MockExample {
  constructor(private url: string) {}

  example() {
    return Promise.resolve(null);
  }
}
