function myPlugin({ types: t }) {
  return {
    visitor: {
      Identifier(path) {
        const { node } = path
        if(node.name === 'answerToTheUltimateQuestionOfLifeTheUniverseAndEverything')
          node.name = '42'
      }
    }
  }
}

module.exports = myPlugin
