declare global {
  // eslint-disable-next-line no-var
  var testRequest: ReturnType<typeof import('supertest')>;
}

export {};
