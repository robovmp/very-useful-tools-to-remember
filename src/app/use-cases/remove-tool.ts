import { Injectable } from '@nestjs/common';
import { ToolRepository } from '../repositories/tool-repository';

@Injectable()
export class RemoveTool {
  constructor(private toolRepository: ToolRepository) {}

  async execute(id: string): Promise<void> {
    return await this.toolRepository.removeTool(id);
  }
}
