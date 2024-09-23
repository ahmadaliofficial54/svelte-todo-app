import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';

@Injectable()
export class AppService {
  private openai: OpenAI;
  constructor() {
    this.openai = new OpenAI({
      apiKey: 'apikey',
    });
  }

  getHello(): string {
    return 'Hello World!12';
  }

  async getCompletion() {
    const response = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'Hi, how are' }],
    });
    console.log('respone>>>>', response.choices[0]);
    return response;
  }
}
