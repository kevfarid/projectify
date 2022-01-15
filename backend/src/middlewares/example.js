/**
 * example middleware
 * @param {Object} _req request
 * @param {Object} _res respose
 * @param {*} next exit middleware
 * @returns next()
 */
export const example = (_req, _res, next) => {
  return next()
}
