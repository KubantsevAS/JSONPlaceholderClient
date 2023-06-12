export const makePause = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
