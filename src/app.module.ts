import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { PracticeModule } from './practice/practice.module';
import { LoggerMiddleware } from './common/middleware/middleware.middleware';
import { SongsController } from './songs/songs.controller';
import { logger } from './common/middleware/logger.middleware';

@Module({
  imports: [SongsModule, PracticeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes('practice')
    // consumer.apply(LoggerMiddleware).forRoutes('songs'); //option 1
    // consumer.apply(LoggerMiddleware).forRoutes({path: 'songs', method: RequestMethod.POST}); //option 2
    // consumer.apply(LoggerMiddleware).forRoutes(SongsController); //option 3
  }
}
