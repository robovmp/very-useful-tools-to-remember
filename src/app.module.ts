import { Module } from '@nestjs/common';
import { AppController } from './app/infra/controllers/app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
