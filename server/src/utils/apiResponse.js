export const success = (res, data, message = 'OK', status = 200) =>
  res.status(status).json({ success: true, message, data });

export const failure = (res, message = 'Something went wrong', status = 400, errors = null) =>
  res.status(status).json({ success: false, message, errors });
