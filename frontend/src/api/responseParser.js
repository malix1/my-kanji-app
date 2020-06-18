export const responseParser = (response) => {
  if (response.data.status === 200) {
    return response.data;
  } else if (response.data.status === 400) {
    const errors = errorHandler(response.data);
    return errors;
  }
};

export const errorHandler = (errors) => {
  const parsedErrors = [];
  for (var error in errors) {
    parsedErrors.push(errors[error][0]);
  }
  return parsedErrors
};
