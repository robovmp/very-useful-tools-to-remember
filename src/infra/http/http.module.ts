import { FilterToolsTag } from './../../app/use-cases/filter-tools-tag';
import { ListTools } from './../../app/use-cases/list-tools';
import { RemoveTool } from './../../app/use-cases/remove-tool';
import { RegisterNewTool } from './../../app/use-cases/register-new-tool';
import { ToolController } from './controllers/tool.controller';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ToolController],
  providers: [RegisterNewTool, RemoveTool, ListTools, FilterToolsTag],
})
export class HttpModule {}
