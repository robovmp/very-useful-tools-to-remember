import { Tool } from 'src/app/entities/tool';
export class ToolView {
  static toHTTP(tool: Tool) {
    return {
      id: tool.id,
      title: tool.title.value,
      link: tool.link,
      description: tool.description.value,
      tags: tool.tags.value,
    };
  }

  static toTagHTTP(tool: Tool) {
    return {
      id: tool.id,
      title: tool.title,
      link: tool.link,
      description: tool.description,
      tags: tool.tags,
    };
  }
}
