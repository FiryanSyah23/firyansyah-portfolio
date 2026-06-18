const { default: dataProjects } = require("@/data/projects");
const { default: dataSkills } = require("@/data/skills");


const dataSkillsWithCount = dataSkills.map((category) => ({
	...category,
	items: category.items.map((item) => ({
		...item,
		projectCount: dataProjects.filter((project) =>
			project.tech.some((tech) => tech.toLowerCase() === item.name.toLowerCase()),
		).length,
	})),
}));

module.exports = dataSkillsWithCount;
