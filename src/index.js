module.exports = function toReadable(number) {
    let array = [];
    numbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred",
    };
    array = number.toString().split("");

    switch (number.toString().length) {
        case 1:
            return numbers[number];
            break;

        case 2:
            if (numbers[number]) {
                return numbers[number];
            } else return numbers[array[0] + 0] + " " + numbers[array[1]];
            break;
        case 3:
            if (numbers[number]) {
                return numbers[1] + " " + numbers[number];
            } else if (array[1] == 0 && array[2] == 0) {
                return numbers[array[0]] + " " + numbers[100];
            } else if (array[1] == 0) {
                return (
                    numbers[array[0]] +
                    " " +
                    numbers[100] +
                    " " +
                    numbers[array[2]]
                );
            } else
                return (
                    numbers[array[0]] +
                    " " +
                    numbers[100] +
                    " " +
                    (numbers[array[1] + array[2]] ||
                        numbers[array[1] + 0] + " " + numbers[array[2]])
                );
            break;
    }
};
