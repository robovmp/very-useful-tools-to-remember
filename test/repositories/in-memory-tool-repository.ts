import { Tool } from 'src/app/entities/tool';
import { ToolRepository } from 'src/app/repositories/tool-repository';

export class InMemoryToolRepository implements ToolRepository {
  public tools: Tool[] = [];

  async create(tool: Tool): Promise<void> {
    this.tools.push(tool);
  }
}
