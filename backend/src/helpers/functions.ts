// Desc: Helper functions used throughout the application

// FormatNumber formats a number to have a leading zero if it is less than 10
export function FormatNumber(num: number): string {
    if (num < 10) {
        return `0${num}`;
    }
    return num.toString();
}

// ValidatePace validates the input parameters for running pace
export function ValidatePace(min: number, sec: number): boolean {
    return min >= 0 && sec >= 0 && sec < 60;
}

// ValidateTime validates the input parameters for running time
export function ValidateTime(hour: number, min: number, sec: number): boolean {
    return hour >= 0 && min >= 0 && sec >= 0 && min < 60 && sec < 60;
}