var fs = require('fs');

var filePath = './skills.json';

var internalSaveSkills = function(skills) {
  var data = { skills: skills};
  var strData = JSON.stringify(data);
  fs.writeFileSync(filePath, strData);
}

var internalReadSkills = function() {
  var jsonData = fs.readFileSync(filePath);
  var jsData = JSON.parse(jsonData);
  return jsData && jsData.skills;
}

var SkillsManager = function() {

  var skillList = internalReadSkills();

  if(!skillList) {
    console.error('Il y a un probleme avec la liste ! Le programme ne peut pas fonctionner !');
  }

  return {
    add: (skill) => {
      skillList.push(skill);
      internalSaveSkills(skillList);
    },
    remove: function(skill) {
      skillList = skillList.filter( function(item) {
        return item !== skill;
      });
      internalSaveSkills(skillList);
    },
    list: function() {
      console.log(skillList);
    },
    save: function() {
      internalSaveSkills(skillList);
    }
  }
}

module.exports = SkillsManager;
