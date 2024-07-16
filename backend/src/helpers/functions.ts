// Desc: Helper functions used throughout the application

// FormatNumber formats a number to have a leading zero if it is less than 10
export function FormatNumber(num: number): string {
    if (num < 10) {
        return `0${num}`;
    }
    return num.toString();
}

// ValidateTime validates the input parameters for running pace
export function ValidateTime(min: number, sec: number): boolean {
    return min >= 0 && sec >= 0 && sec < 60;
}