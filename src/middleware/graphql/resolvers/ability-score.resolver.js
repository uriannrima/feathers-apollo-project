module.exports = function () {
  return {
    IAbilityScore: {
      __resolveType(obj) {
        if (obj.base) {
          return 'CharacterAbilityScore';
        }

        return 'AbilityScore';
      },
    },
    AbilityScore: ({ _id }, args, context) => {
      console.log({ _id, args, context });
      return {};
    },
    CharacterAbilityScore: ({ _id }, args, context) => {
      console.log({ _id, args, context });
      return {};
    }
  };
};