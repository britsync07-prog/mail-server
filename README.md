# Mail Server Platform

A complete, production-ready self-hosted email server platform inspired by Postal, Mailcow, and Mail-in-a-Box.

## Architecture

The platform consists of several microservices orchestrated via Docker Compose:
- **Backend**: NestJS application handling business logic, API, queues, and database interaction.
- **Frontend**: Next.js application for User and Admin portals.
- **PostgreSQL**: Relational database for all configuration, users, and tracking data.
- **Redis**: Cache and task queues (BullMQ).
- **MinIO**: S3-compatible object storage for email attachments and archives.
- **Postfix & Dovecot**: SMTP and IMAP services (placeholders configured in docker-compose).
- **Rspamd**: Anti-spam and DKIM signing.
- **Prometheus & Grafana**: System monitoring and metrics.

## Prerequisites
- Docker & Docker Compose
- Node.js 20+

## Getting Started

### Development

1. Setup the backing services (Database, Redis, etc.):
   \`\`\`bash
   docker-compose up -d db redis minio prometheus grafana
   \`\`\`

2. Setup Backend:
   \`\`\`bash
   cd backend
   npm install
   # Copy .env example (ensure DATABASE_URL connects to localhost:5432)
   npx prisma generate
   npx prisma migrate dev
   npm run start:dev
   \`\`\`

3. Setup Frontend:
   \`\`\`bash
   cd frontend
   npm install
   npm run dev
   \`\`\`

### Production Deployment

Deploy using Docker Compose with the full stack:

\`\`\`bash
docker-compose up -d
\`\`\`

*Note: Ensure to update environment variables and custom configuration for Postfix and Dovecot for real production usage.*

## REST API Documentation

### \`POST /api/send\`
Send an email.

**Payload:**
\`\`\`json
{
  "to": "user@example.com",
  "from": "sender@yourdomain.com",
  "subject": "Hello",
  "html": "<p>World</p>"
}
\`\`\`

### \`POST /api/domains\`
Add a new domain for an organization.

**Payload:**
\`\`\`json
{
  "name": "yourdomain.com",
  "organizationId": "uuid"
}
\`\`\`

### \`POST /api/warmup/start\`
Start an IP/Domain warming sequence.

**Payload:**
\`\`\`json
{
  "domainId": "uuid"
}
\`\`\`

### \`GET /api/server/health\`
Check basic health status.

**Response:**
\`\`\`json
{
  "status": "ok",
  "database": "connected"
}
\`\`\`
