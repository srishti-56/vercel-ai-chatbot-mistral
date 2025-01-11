import { openai } from '@ai-sdk/openai';
import { mistral } from '@ai-sdk/mistral'; // Add this import

import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';

import { customMiddleware } from './custom-middleware';

export const customModel = (apiIdentifier: string) => {
  return wrapLanguageModel({
    model: mistral(apiIdentifier),
    middleware: customMiddleware,
  });
};
