const MyPlugin = require('./src')

module.exports = function (api) {
  api.cache(true)

  const plugins = [MyPlugin]

  return { plugins }
}
