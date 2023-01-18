import { ToolView } from './../views/tool.view';
import { CreateToolBody } from './../dtos/create-tool-body';
import { RemoveTool } from './../../../app/use-cases/remove-tool';
import { ListTools } from './../../../app/use-cases/list-tools';
import { FilterToolsTag } from './../../../app/use-cases/filter-tools-tag';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { RegisterNewTool } from 'src/app/use-cases/register-new-tool';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('tools')
@ApiTags('Tools')
export class ToolController {
  constructor(
    private filterToolTag: FilterToolsTag,
    private listTools: ListTools,
    private registerNewTool: RegisterNewTool,
    private removeTool: RemoveTool,
  ) {}

  @Get()
  @ApiOperation({ summary: 'List all tools' })
  async getManyTools() {
    const tools = await this.listTools.execute();

    return {
      tools: tools.map((tool) => ToolView.toHTTP(tool)),
    };
  }

  @Get('from')
  @ApiOperation({ summary: 'List tools by tag' })
  async getToolByTag(@Query('tag') tag: string) {
    const tools = await this.filterToolTag.execute(tag);

    return {
      tools: tools.map((tool) => ToolView.toTagHTTP(tool)),
    };
  }

  @Post('/create')
  @ApiOperation({ summary: 'Create new tool' })
  async create(@Body() body: CreateToolBody) {
    const { title, link, description, tags } = body;

    const { tool } = await this.registerNewTool.execute({
      title,
      link,
      description,
      tags,
    });

    return {
      tool: ToolView.toHTTP(tool),
    };
  }

  @Delete('delete/:id')
  @ApiOperation({ summary: 'Remove tool' })
  async deleteTool(@Param('id') id: string) {
    return await this.removeTool.execute(id);
  }
}
