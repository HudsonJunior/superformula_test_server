import { Body, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getSeed(): Object {
    return {
      description: "seed generated",
      content: {
        seed: (Math.random() + 1).toString(36).substring(2),
        expires_at: Date(),
      },
    };
  }
  }
