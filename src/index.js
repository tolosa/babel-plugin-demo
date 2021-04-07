const defaultOptions = {
  identifier: 'answerToTheUltimateQuestionOfLifeTheUniverseAndEverything',
  answer: 42
}

function myPlugin({ types: t }) {
  return {
    visitor: {
      Identifier(path, state) {
        const options = { ...defaultOptions, ...state.opts }
        const { node } = path
        if(node.name === options.identifier) {
          node.name = String(options.answer)
        }
      }
    }
  }
}

module.exports = myPlugin
