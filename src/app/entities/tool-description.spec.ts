import { Description } from './tool-description';
describe('Tool description', () => {
  it('Should be able to create a tool description', () => {
    const description = new Description('Description cool');
    expect(description).toBeTruthy();
  });

  it('Should not be able to create a tool description width less than 10 characters', () => {
    expect(() => new Description('aaa')).toThrow();
  });

  it('Should not be able to create a tool description width more than 241 characters', () => {
    expect(() => new Description('a'.repeat(241))).toThrow();
  });
});
