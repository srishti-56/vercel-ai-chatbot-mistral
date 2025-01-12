import { openai } from '@ai-sdk/openai';
import { mistral } from '@ai-sdk/mistral'; // Add this import

import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';

import { customMiddleware } from './custom-middleware';

export const customModel = (apiIdentifier: string) => {

  let modelProvider;
  if (apiIdentifier.includes('openai')){
    modelProvider = openai(apiIdentifier);
  }
  else if (apiIdentifier.includes('mistral')){
    modelProvider = mistral(apiIdentifier);
  }
  else {
    console.error("Clearly define provider. Default to openai.");
    modelProvider = openai(apiIdentifier);
  }

  return wrapLanguageModel({
    model: modelProvider,
    middleware: customMiddleware,
  });
};
