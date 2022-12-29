export const getClasses = (classes) =>
  classes
    .filter((item) => item !== '')
    .join(' ')
    .trim();
// this is a helper function that will help us to identify classes within SCSS modules.
// if class is empty, then filter it out, then join it classes with a space.
// Also, trim space inbetween classes
