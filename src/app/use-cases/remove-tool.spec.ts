import { RemoveTool } from './remove-tool';
import { InMemoryToolRepository } from '../../../test/repositories/in-memory-tool-repository';
import { Tool } from '../entities/tool';
import { Title } from '../entities/tool-title';
import { Description } from '../entities/tool-description';
import { Tags } from '../entities/tool-tags';

describe('Remove tool by id', () => {
  it('should be able to remove a tool', async () => {
    const toolRepository = new InMemoryToolRepository();
    const removeTool = new RemoveTool(toolRepository);

    await toolRepository.create(
      new Tool(
        {
          title: new Title('Title'),
          link: 'https://github.com/robovmp',
          description: new Description('This is cool description'),
          tags: new Tags(['tag 1', 'tag 2']),
        },
        '1',
      ),
    );

    await toolRepository.create(
      new Tool(
        {
          title: new Title('Title'),
          link: 'https://github.com/robovmp',
          description: new Description('This is cool description'),
          tags: new Tags(['tag 1', 'tag 2']),
        },
        '2',
      ),
    );

    await removeTool.execute('2');

    expect(toolRepository.tools).toHaveLength(1);
  });
});
