import { Utils } from '../app/Utils';

describe('Utils test suite', () => {
  beforeEach(() => {
    console.log('before each');
  });

  beforeEach(() => {
    console.log('before all');
  });

  test('first test', () => {
    const result = Utils.toUpperCase('abc');
    expect(result).toBe('ABC');
  });

  test('parsed simple URL', () => {
    const parsedUrl = Utils.parseUrl('http://localhost:8080/login');
    expect(parsedUrl.href).toBe('http://localhost:8080/login');
    expect(parsedUrl.port).toBe('8080');
    expect(parsedUrl.protocol).toBe('http:');
    expect(parsedUrl.query).toEqual({});
  });

  test('parse URL with query', () => {
    const parsedUrl = Utils.parseUrl(
      'http://localhost:8080/login?user=user&password=password'
    );
    const expectedQuery = { user: 'user', password: 'password' };
    expect(parsedUrl.query).toEqual(expectedQuery);
    expect(expectedQuery).toBe(expectedQuery);
  });

  test('test invaild URL', () => {
    function expectError() {
      Utils.parseUrl('');
    }
    expect(expectError).toThrowError('Empty url');
  });

  test('test invaild URL with arrow function', () => {
    expect(() => {
      Utils.parseUrl('');
    }).toThrow('Empty url');
  });

  test('test invaild URL with try catch', () => {
    try {
      Utils.parseUrl('');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty('message', 'Empty url');
    }
  });
});
