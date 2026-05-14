import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './services/prisma.service';

@Controller('api')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('server/health')
  async getHealth() {
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      return { status: 'ok', database: 'connected' };
    } catch (e) {
      return { status: 'error', database: 'disconnected' };
    }
  }
}
