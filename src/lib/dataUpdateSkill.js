import dataSkills from "@/data/skills";
import dataProjects from "@/data/projects";

const dataSkillsWithCount = dataSkills.map((category) => ({
	...category,
	items: category.items.map((item) => ({
		...item,
		projectCount: dataProjects.filter((project) =>
			project.tech.some((tech) => tech.toLowerCase() === item.name.toLowerCase()),
		).length,
	})),
}));

export default dataSkillsWithCount;
