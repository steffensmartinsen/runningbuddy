// Desc: Helper functions used throughout the application

export function FormatNumber(num: number): string {
    if (num < 10) {
        return `0${num}`;
    }
    return num.toString();
}