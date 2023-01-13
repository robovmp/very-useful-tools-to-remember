import { Tags } from './../entities/tool-tags';
import { FilterToolsTag } from './filter-tools-tag';
import { InMemoryToolRepository } from '../../../test/repositories/in-memory-tool-repository';
import { MakeTool } from '../../../test/factories/makeTool';

describe('Filter tools by tag', () => {
  it('should be able to list tools by tag ', async () => {
    const toolRepository = new InMemoryToolRepository();
    const filterToolsTags = new FilterToolsTag(toolRepository);

    await toolRepository.create(MakeTool({ tags: new Tags(['node', 'json']) }));
    await toolRepository.create(MakeTool({ tags: new Tags(['node']) }));
    await toolRepository.create(MakeTool({ tags: new Tags(['json']) }));
    await toolRepository.create(MakeTool({ tags: new Tags(['localhost']) }));

    expect(await filterToolsTags.execute('node')).toHaveLength(2);
  });
});
