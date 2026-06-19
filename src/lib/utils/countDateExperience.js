const getExperienceDuration = (startDate) => {
        const start = new Date(startDate);
        const now = new Date();

        const diffMs = now - start;
        const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25);

        if (diffYears < 1) {
            const diffMonths = diffMs / (1000 * 60 * 60 * 24 * 30.44);
            return {
                value: Math.max(1, Math.round(diffMonths)),
                unit: diffMonths < 2 ? "Month" : "Months",
            };
        }

        return {
            value: Number(diffYears.toFixed(0)),
            unit: diffYears < 2 ? "Year" : "Years",
        };
    };

module.exports = getExperienceDuration;