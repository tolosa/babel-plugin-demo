const MyPlugin = require('./src')

module.exports = function (api) {
  api.cache(true)

  const plugins = [
    [MyPlugin, { answer: 42 }]
  ]

  return { plugins }
}
