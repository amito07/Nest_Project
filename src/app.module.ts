import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { PracticeModule } from './practice/practice.module';

@Module({
  imports: [SongsModule, PracticeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
