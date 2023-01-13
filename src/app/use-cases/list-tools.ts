import { Tool } from '../entities/tool';
import { Injectable } from '@nestjs/common';
import { ToolRepository } from '../repositories/tool-repository';

@Injectable()
export class ListTools {
  constructor(private toolRepository: ToolRepository) {}

  async execute(): Promise<Tool[]> {
    return await this.toolRepository.findMany();
  }
}
