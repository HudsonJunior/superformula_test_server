import { Body, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getSeed(): Object {
    const date = new Date();
    date.setMinutes(date.getMinutes() + 1);
    return {
      description: "seed generated",
      content: {
        seed: (Math.random() + 1).toString(36).substring(2),
        expires_at: date.toISOString(),
      },
    };
  }
  }
