import { PrismaToolRepository } from './prisma/repository/prisma-tool-repository';
import { ToolRepository } from 'src/app/repositories/tool-repository';
import { PrismaService } from './prisma/prisma.service';
import { Module } from '@nestjs/common';
@Module({
  providers: [
    PrismaService,
    {
      provide: ToolRepository,
      useClass: PrismaToolRepository,
    },
  ],
  exports: [ToolRepository],
})
export class DatabaseModule {}
