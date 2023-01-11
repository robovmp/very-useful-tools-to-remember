import { Tags } from './tool-tags';
describe('Tool tags', () => {
  it('Should be able to create a tool tags', () => {
    const tags = new Tags(['tag cool 1', 'tag cool 2']);
    expect(tags).toBeTruthy();
  });

  it('Should not be able to create a tool tag width less than 1 ', () => {
    expect(() => new Tags([])).toThrow();
  });

  const maxTags = Array(11).fill('Tags');

  it('Should not be able to create a tag width more than 10 tag', () => {
    expect(() => new Tags(maxTags)).toThrow();
  });
});
