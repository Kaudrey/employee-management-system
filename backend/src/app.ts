import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger/doc/swagger.json'; // Path to your swagger.json file



import router from './routes/index'; // Central router

dotenv.config();

const app: Express = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

// === Middlewares ===
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// === Swagger Docs (via swagger-autogen) ===
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// === Main API Routes ===
app.use('/api/v1', router);

// === Root Healthcheck ===
app.get('/', (_req: Request, res: Response) => {
  res.send('💥 Server is running!');
});

// === Global Error Handler ===
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error('💥 Global error:', err.stack);
  res.status(500).json({ message: 'Something broke!' });
});

// === Server Startup ===
app.listen(PORT, () => {
  console.log(`🚀 Server is live on http://localhost:${PORT}`);
  console.log(`📚 Swagger UI is at http://localhost:${PORT}/api-docs`);
});

// === Graceful Shutdown ===
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  console.log('\n🧼 Prisma disconnected. Bye!');
  process.exit(0);
});
