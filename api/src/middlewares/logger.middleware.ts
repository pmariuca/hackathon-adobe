import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger();

  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log(`Request received: ${req.method} ${req.url}`);
    next();
    res.on('finish', () => {
      this.logger.log(
        `Response sent: ${req.method} ${req.url} ${res.statusCode}`,
      );
    });
  }
}
