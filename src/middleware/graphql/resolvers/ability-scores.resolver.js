module.exports = function (app) {
  return {
    IAbilityScore: {
      __resolveType(obj) {
        if (obj.base) {
          return 'CharacterAbilityScore';
        }

        return 'AbilityScore';
      },
    }
  };
};