The Mistral AI provider contains language model support for the Mistral chat API.

Setup
The Mistral provider is available in the @ai-sdk/mistral module. You can install it with

pnpm
npm
yarn
pnpm add @ai-sdk/mistral
Provider Instance
You can import the default provider instance mistral from @ai-sdk/mistral:


import { mistral } from '@ai-sdk/mistral';
If you need a customized setup, you can import createMistral from @ai-sdk/mistral and create a provider instance with your settings:


import { createMistral } from '@ai-sdk/mistral';

const mistral = createMistral({
  // custom settings
});
You can use the following optional settings to customize the Mistral provider instance:

baseURL string

Use a different URL prefix for API calls, e.g. to use proxy servers. The default prefix is https://api.mistral.ai/v1.

apiKey string

API key that is being sent using the Authorization header. It defaults to the MISTRAL_API_KEY environment variable.

headers Record<string,string>

Custom headers to include in the requests.

fetch (input: RequestInfo, init?: RequestInit) => Promise<Response>

Custom fetch implementation. Defaults to the global fetch function. You can use it as a middleware to intercept requests, or to provide a custom fetch implementation for e.g. testing.

Language Models
You can create models that call the Mistral chat API using a provider instance. The first argument is the model id, e.g. mistral-large-latest. Some Mistral chat models support tool calls.


const model = mistral('mistral-large-latest');
Mistral chat models also support additional model settings that are not part of the standard call settings. You can pass them as an options argument:


const model = mistral('mistral-large-latest', {
  safePrompt: true, // optional safety prompt injection
});
The following optional settings are available for Mistral models:

safePrompt boolean

Whether to inject a safety prompt before all conversations.

Defaults to false.

Example
You can use Mistral language models to generate text with the generateText function:


import { mistral } from '@ai-sdk/mistral';
import { generateText } from 'ai';

const { text } = await generateText({
  model: mistral('mistral-large-latest'),
  prompt: 'Write a vegetarian lasagna recipe for 4 people.',
});
Mistral language models can also be used in the streamText, generateObject, streamObject, and streamUI functions (see AI SDK Core and AI SDK RSC).

