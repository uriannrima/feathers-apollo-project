module.exports = function (app) {
  return {
    Character: {
      abilityScores: async ({ abilityScores: characterAbilityScores }, args, context) => {
        const AbilityScores = app.service('ability-scores');
        return characterAbilityScores.map(async (characterAbilityScore) => {
          const { _id } = characterAbilityScore;
          const abilityScore = await AbilityScores.get(_id, context);
          return Object.assign({}, characterAbilityScore, abilityScore);
        });
      }
    }
  };
};