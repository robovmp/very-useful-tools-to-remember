import { Tool } from 'src/app/entities/tool';
import { Tool as RawTool } from '@prisma/client';
import { Title } from 'src/app/entities/tool-title';
import { Description } from 'src/app/entities/tool-description';
import { Tags } from 'src/app/entities/tool-tags';

export class PrismaToolMapper {
  static toPrisma(tool: Tool) {
    return {
      id: tool.id,
      title: tool.title.value,
      link: tool.link,
      description: tool.description.value,
      tags: tool.tags.value,
    };
  }

  static toDomain(raw: RawTool): Tool {
    return new Tool(
      {
        title: new Title(raw.title),
        link: raw.link,
        description: new Description(raw.description),
        tags: new Tags(raw.tags),
      },
      raw.id,
    );
  }
}
