export const response = (status, message, data, res) => {
  return res.status(status).json({
    message,
    status,
    data,
  })
}
