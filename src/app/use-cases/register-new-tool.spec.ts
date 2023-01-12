import { InMemoryToolRepository } from '../../../test/repositories/in-memory-tool-repository';
import { RegisterNewTool } from './register-new-tool';

describe('Register tool', () => {
  it('should be able to register the tool ', async () => {
    const toolRepository = new InMemoryToolRepository();
    const registerNewTool = new RegisterNewTool(toolRepository);

    const { tool } = await registerNewTool.execute({
      title: 'This a title of tool',
      link: 'ejs.org/en/',
      description: 'The description is cool',
      tags: ['tag one', 'tag two'],
    });

    expect(toolRepository.tools).toHaveLength(1);
    expect(toolRepository.tools[0]).toEqual(tool);
  });
});
