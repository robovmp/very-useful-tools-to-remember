import { Description } from '../../src/app/entities/tool-description';
import { Tags } from '../../src/app/entities/tool-tags';
import { Title } from '../../src/app/entities/tool-title';
import { Tool, ToolProps } from './../../src/app/entities/tool';

type Override = Partial<ToolProps>;

export function MakeTool(override: Override = {}) {
  return new Tool({
    title: new Title('The tile is cool'),
    link: 'https://www.youtube.com/',
    description: new Description('This is a very good description'),
    tags: new Tags(['Tag 1', 'Tag 2']),
    ...override,
  });
}
