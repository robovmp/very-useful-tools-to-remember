import { Tool } from 'src/app/entities/tool';
import { ToolRepository } from 'src/app/repositories/tool-repository';

export class InMemoryToolRepository implements ToolRepository {
  public tools: Tool[] = [];

  async findMany(): Promise<Tool[]> {
    return this.tools;
  }

  async filterToolsByTag(tag: string): Promise<Tool[]> {
    let filterTags = [];
    this.tools.forEach((tool) => {
      const isFind = tool.tags.value.includes(tag);
      if (isFind) {
        filterTags = [...filterTags, tool];
      }
    });

    return filterTags;
  }

  async create(tool: Tool): Promise<void> {
    this.tools.push(tool);
  }

  async removeTool(id: string): Promise<void> {
    const toolSelect = this.tools.find((ele) => ele.id === id);
    const index = this.tools.indexOf(toolSelect);
    if (index > -1) this.tools.splice(index, 1);
  }
}
