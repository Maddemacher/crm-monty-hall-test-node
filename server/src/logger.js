export const info = (...args) => {
  if (process.env.NODE_ENV === 'test') {
    return;
  }

  console.log(...args);
};

export const warn = (...args) => {
  if (process.env.NODE_ENV === 'test') {
    return;
  }

  console.warn(...args);
};

export const error = (...args) => {
  if (process.env.NODE_ENV === 'test') {
    return;
  }

  console.error(...args);
};
