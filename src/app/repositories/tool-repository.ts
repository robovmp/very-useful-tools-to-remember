import { Tool } from './../entities/tool';

export abstract class ToolRepository {
  abstract create(tool: Tool): Promise<void>;
  abstract findMany(): Promise<Tool[]>;
  abstract filterToolsByTag(tag: string): Promise<Tool[]>;
  abstract removeTool(id: string): Promise<void>;
}
