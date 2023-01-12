import { Tool } from '../entities/tool';
import { Injectable } from '@nestjs/common';
import { ToolRepository } from '../repositories/tool-repository';
import { Title } from '../entities/tool-title';
import { Description } from '../entities/tool-description';
import { Tags } from '../entities/tool-tags';

interface RegisterNewToolRequest {
  title: string;
  link: string;
  description: string;
  tags: string[];
}

interface RegisterNewToolResponse {
  tool: Tool;
}

@Injectable()
export class RegisterNewTool {
  constructor(private toolRepository: ToolRepository) {}

  async execute(
    request: RegisterNewToolRequest,
  ): Promise<RegisterNewToolResponse> {
    const { title, link, description, tags } = request;

    const tool = new Tool({
      title: new Title(title),
      link,
      description: new Description(description),
      tags: new Tags(tags),
    });

    await this.toolRepository.create(tool);

    return {
      tool,
    };
  }
}
