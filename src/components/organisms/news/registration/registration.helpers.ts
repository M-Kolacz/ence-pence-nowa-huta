export const getRegistrationYears = () => {
	const currentDate = new Date()
	const nurseryYearEnd = 6

	if (currentDate.getMonth() < nurseryYearEnd) {
		return {
			currentYear: currentDate.getFullYear() - 1,
			nextYear: currentDate.getFullYear(),
		}
	} else {
		return {
			currentYear: currentDate.getFullYear(),
			nextYear: currentDate.getFullYear() + 1,
		}
	}
}
