import { Controller, Post, Body, Get, Req, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';

@Controller('api')
export class ApiController {
  constructor(private readonly prisma: PrismaService) {}

  @Post('send')
  async sendEmail(@Body() body: any, @Req() req: any) {
    // Basic stub for /api/send
    const { to, from, subject, html } = body;
    // Assume queue integration here
    return { status: 'queued', messageId: '12345-stub' };
  }

  @Post('domains')
  async createDomain(@Body() body: any) {
    const { name, organizationId } = body;
    const domain = await this.prisma.domain.create({
      data: {
        name,
        organizationId,
      }
    });
    return domain;
  }

  @Post('warmup/start')
  async startWarmup(@Body() body: any) {
    const { domainId } = body;
    // Stub for warming up
    return { status: 'started', domainId };
  }

  @Get('analytics')
  async getAnalytics() {
    return {
      delivered: 1000,
      bounced: 5,
      opened: 400,
      clicked: 100
    };
  }
}
