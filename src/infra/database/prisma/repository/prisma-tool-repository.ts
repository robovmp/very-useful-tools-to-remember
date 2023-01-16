import { PrismaToolMapper } from '../mappers/Prisma=tool-mapper';
import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { Tool } from 'src/app/entities/tool';
import { ToolRepository } from 'src/app/repositories/tool-repository';

@Injectable()
export class PrismaToolRepository implements ToolRepository {
  constructor(private prisma: PrismaService) {}

  async create(tool: Tool): Promise<void> {
    const persistence = PrismaToolMapper.toPrisma(tool);
    await this.prisma.tool.create({
      data: persistence,
    });
  }
  async findMany(): Promise<Tool[]> {
    const tools = await this.prisma.tool.findMany();
    return tools.map((tool) => PrismaToolMapper.toDomain(tool));
  }
  async filterToolsByTag(tag: string): Promise<Tool[]> {
    let filterTags = [];
    const tags = await this.prisma.tool.findMany();

    tags.forEach((tool) => {
      const isFind = tool.tags.includes(tag);
      if (isFind) {
        filterTags = [...filterTags, tool];
      }
    });

    return filterTags;
  }
  async removeTool(id: string): Promise<void> {
    await this.prisma.tool.delete({
      where: {
        id: id,
      },
    });
  }
}
