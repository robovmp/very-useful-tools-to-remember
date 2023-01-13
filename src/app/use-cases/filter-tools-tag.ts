import { Tool } from '../entities/tool';
import { Injectable } from '@nestjs/common';
import { ToolRepository } from '../repositories/tool-repository';

@Injectable()
export class FilterToolsTag {
  constructor(private toolRepository: ToolRepository) {}

  async execute(tag: string): Promise<Tool[]> {
    return await this.toolRepository.filterToolsByTag(tag);
  }
}
