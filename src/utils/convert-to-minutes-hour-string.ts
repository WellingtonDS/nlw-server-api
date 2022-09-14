export function convertMinutesToHourString(minutesAmount: number) {

    const hoursAmount = Math.floor(minutesAmount / 60);
    const minutes = minutesAmount % 60

    return `${String(hoursAmount).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}