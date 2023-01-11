import { Tool } from './tool';
import { Description } from './tool-description';
import { Tags } from './tool-tags';
import { Title } from './tool-title';
describe('Tool', () => {
  it('Should be able to create a tool', () => {
    const maxTags = Array(1).fill('Tags');
    const tool = new Tool({
      description: new Description('the description very interesting'),
      link: 'https://nodejs.org/en/',
      tags: new Tags(maxTags),
      title: new Title('NodeJs'),
    });

    expect(tool).toBeTruthy();
  });
});
