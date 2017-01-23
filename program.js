var SkillsManager = require('./skillsManager.js');

var monSkillsManager = new SkillsManager();

var args = process.argv.slice(2);

var methodStr = process.argv[2];
var skillStr = process.argv[3];


switch (methodStr) {
  case 'add':
  case 'remove':
    if(!skillStr) {
      return console.error('il faut ajouter un skill en 2eme parametre !');
    }
    monSkillsManager[methodStr](skillStr);
    break;
  case 'list':
  case 'save':
    monSkillsManager[methodStr]();
    break;
  default :

}
