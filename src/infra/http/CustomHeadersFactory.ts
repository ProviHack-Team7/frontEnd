export const internalHeaders = (apiKey: string) => ({
  'x-api-key': apiKey,
});

export const externalHeaders = (token: string) => ({
  Authorization: token,
  'Content-Type': 'application/json',
});
