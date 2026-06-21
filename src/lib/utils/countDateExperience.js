const getExperienceDuration = (startDate) => {
	const start = new Date(startDate);
	const now = new Date();
	const diffMs = now - start;
	const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25);
	const roundedYears = Math.round(diffYears);

	if (diffYears < 1) {
		const diffMonths = diffMs / (1000 * 60 * 60 * 24 * 30.44);
		const roundedMonths = Math.max(1, Math.round(diffMonths));
		return {
			value: roundedMonths,
			unit: roundedMonths === 1 ? "Month" : "Months",
		};
	}

	return {
		value: roundedYears,
		unit: roundedYears === 1 ? "Year" : "Years",
	};
};

export default getExperienceDuration;
