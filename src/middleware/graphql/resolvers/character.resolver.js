module.exports = function (app) {
  return {
    Character: {
      abilityScores: async ({ abilityScores: characterAbilityScores }) => {
        const AbilityScores = app.service('ability-scores');
        return characterAbilityScores.map(async (characterScore) => {
          const { _id } = characterScore;
          const abilityScore = await AbilityScores.get(_id);
          return Object.assign({}, characterScore, abilityScore);
        });
      }
    }
  };
};