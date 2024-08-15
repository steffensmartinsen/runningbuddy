
// Validation function for time input
const ValidateTime = (hour: string, min: string, sec: string): boolean => {
    
    // Check if the string input are numbers
    if (!ValidateNumber(hour) || !ValidateNumber(min) || !ValidateNumber(sec)) {
        return false;
    }

    // Check if the string input are within the correct range
    if (!ValidateHour(hour) || !ValidateMinAndSec(min) || !ValidateMinAndSec(sec)) {
        return false;
    }

    return true;
};

// Validation function for pace input
const ValidatePace = (min: string, sec: string): boolean => {
        
    // Check if the string input are numbers
    if (!ValidateNumber(min) || !ValidateNumber(sec)) {
        return false;
    }

    // Check if the string input are within the correct range
    if (!ValidateMinAndSec(min) || !ValidateMinAndSec(sec)) {
        return false;
    }

    return true;
};

// Validation function for distance input
const ValidateDistance = (distance: string): boolean => {
    return ValidateNumber(distance);
};

// Atomic validation function for checking if an input is a number
const ValidateNumber = (num: string): boolean => {
    return !isNaN(Number(num)) && num !== '';
};

// Atomic validation function for hours
const ValidateHour = (hour: string): boolean => {
    return Number(hour) >= 0;
}

// Atomic validation function for minutes and seconds
const ValidateMinAndSec = (min: string): boolean => {
    return Number(min) >= 0 && Number(min) < 60;
}

export { ValidateTime, ValidatePace, ValidateDistance };