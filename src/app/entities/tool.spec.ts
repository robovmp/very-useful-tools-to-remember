import { Tool } from './tool';

describe('Toll', () => {
  it('should be able to create a tool', () => {
    const tool = new Tool({
      title: 'Express',
      description: 'framework javascript',
      link: 'https://nodejs.org/en/',
      tags: ['node', 'javascript', 'desenvolvimento'],
    });

    expect(tool).toBeTruthy();
  });
});
