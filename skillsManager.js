var fs = require('fs');
var skillsBackup = fs.readFileSync('./skillsCapture.json');

var skillList = JSON.parse(skillsBackup);

var skillsManager = {
	add : function(skill) {
		skillList.push(skill);
	},
	remove : function(skill) {
		var skillPos = skillList.indexOf(skill);
	
		if (skillPos !== -1) {
		skillList.splice(skillPos, 1);
		}	
	}
};

if (process.argv[2] === '-r') {
	for (var i = 3; i < process.argv.length; i++) {
		
		skillsManager.remove(process.argv[i]);
	}
}

else {
	for (var i = 2; i < process.argv.length; i++) {
		if (skillList.indexOf(process.argv[i]) === -1) {
			skillsManager.add(process.argv[i]);
		}
	}
}

var skillsCapture = JSON.stringify(skillList);
fs.writeFileSync('skillsCapture.json', skillsCapture  ,'UTF-8');
console.log(skillList);






module.exports = skillsManager;
