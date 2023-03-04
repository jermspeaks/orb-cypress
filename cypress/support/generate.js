/**
 * Generate a random number between 100000 and 999999
 */
export const generateLabSampleId = () => {
  return Math.floor(Math.random() * (100000 - 10 + 1) + 10);
};
