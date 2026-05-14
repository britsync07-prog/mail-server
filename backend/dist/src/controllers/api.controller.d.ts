import { PrismaService } from '../services/prisma.service';
export declare class ApiController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    sendEmail(body: any, req: any): Promise<{
        status: string;
        messageId: string;
    }>;
    createDomain(body: any): Promise<{
        name: string;
        organizationId: string;
        id: string;
        verified: boolean;
        dkimPrivateKey: string | null;
        dkimPublicKey: string | null;
        dkimSelector: string | null;
        spfVerified: boolean;
        dmarcVerified: boolean;
        mxVerified: boolean;
        trackingEnabled: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    startWarmup(body: any): Promise<{
        status: string;
        domainId: any;
    }>;
    getAnalytics(): Promise<{
        delivered: number;
        bounced: number;
        opened: number;
        clicked: number;
    }>;
}
