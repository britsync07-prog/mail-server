import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './modules/prisma.module';
import { AppController } from './app.controller';
import { ApiController } from './controllers/api.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
  ],
  controllers: [AppController, ApiController],
  providers: [],
})
export class AppModule {}
