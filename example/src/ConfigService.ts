import { Injectable } from '@nestjs/common';
import { StripeOptions } from '../../src';

@Injectable()
export class ConfigService {
  public getStripeConfig(): StripeOptions {
    return {
      apiKey: 'secret',
      apiVersion: null,
    };
  }
}
