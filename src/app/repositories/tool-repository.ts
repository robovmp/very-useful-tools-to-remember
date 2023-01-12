import { Tool } from './../entities/tool';

export abstract class ToolRepository {
  abstract create(tool: Tool): Promise<void>;
}
