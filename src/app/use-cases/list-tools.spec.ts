import { ListTools } from './list-tools';
import { InMemoryToolRepository } from '../../../test/repositories/in-memory-tool-repository';
import { MakeTool } from '../../../test/factories/makeTool';

describe('List tool', () => {
  it('should be able to list tools ', async () => {
    const toolRepository = new InMemoryToolRepository();
    const listTools = new ListTools(toolRepository);

    await toolRepository.create(MakeTool());
    await toolRepository.create(MakeTool());
    await toolRepository.create(MakeTool());

    await listTools.execute();

    expect(toolRepository.tools).toHaveLength(3);
  });
});
