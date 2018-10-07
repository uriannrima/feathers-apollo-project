module.exports = function () {
  return {
    ISkill: {
      __resolveType(obj) {
        if (obj.base) {
          return 'CharacterSkill';
        }

        return 'Skill';
      },
    }
  };
};