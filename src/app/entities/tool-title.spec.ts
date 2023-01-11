import { Title } from './tool-title';

describe('Tool title', () => {
  it('Should be able to create a tool title', () => {
    const title = new Title('Title cool');
    expect(title).toBeTruthy();
  });

  it('Should not be able to create a tool title width less than 5 characters', () => {
    expect(() => new Title('aaa')).toThrow();
  });

  it('Should not be able to create a notification content width more than 240 characters', () => {
    expect(() => new Title('a'.repeat(51))).toThrow();
  });
});
