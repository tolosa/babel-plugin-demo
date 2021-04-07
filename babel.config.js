module.exports = function (api) {
  api.cache(true)

  const plugins = [function({ types: t }) {
    return {
      visitor: {
        Identifier(path) {
          const { node } = path
          if(node.name === 'answerToTheUltimateQuestionOfLifeTheUniverseAndEverything')
            node.name = '42'
        }
      }
    }
  }]

  return { plugins }
}
