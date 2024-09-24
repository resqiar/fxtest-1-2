// @ts-check
const specialFormat = /[^a-zA-Z0-9 ]+/;
const uppercaseFormat = /[A-Z]/;
const lowercaseFormat = /[a-z]/;
const digitFormat = /[0-9]/;

/**
 * Much simpler solution using regex.
 * -
 *  BIG O Time Complexity = O(4n) = O(n)
 * -
 * @param {string} password - password string to be validated
 */
function ValidatePassword(password) {
    if (password.length < 15) return false;

    let totalPass = 0

    // check if string contains special character
    if (specialFormat.test(password)) totalPass++;

    // check if string have uppercase letter (A-Z)
    if (uppercaseFormat.test(password)) totalPass += 1;

    // check if string have lowercase letter (a-z)
    if (lowercaseFormat.test(password)) totalPass += 1;

    // check if string have digit letter (0-9)
    if (digitFormat.test(password)) totalPass += 1;

    if (totalPass >= 2) return true
    return false
}

const input = [
    "Fxmedia12345678@", "AnotherSecurePwd$567", "SuperP@ssphrase123", "ShortPwd1!", "Password", "lowercaseonly", "MISSINGUPPERANDSPECIAL"
];

for (const pass of input) {
    console.log(`Password "${pass}" is ${ValidatePassword(pass) ? "valid" : "invalid"}`);
}


/**
 *  Naive Find Pairs with sliding window / multiple pointer pattern.
 *  BIG O Time Complexity = O(n^2) - worst but simple solution right of the bat.
 * -
 * @param {Array<Number>} arr 
 * @param {Number} target
 */
function NaiveFindPairs(arr, target) {
    if (arr.length === 0) return [];

    let result = [];

    for (let i = 0; i < arr.length - 1; i++) {
        const firstEl = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            const secondEL = arr[j];

            if (firstEl + secondEL === target) {
                console.log(`Pair found at ${i} and ${j} (${firstEl} + ${secondEL})`);
                result.push([i, j]);
            }
        }
    }

    return result
}

/**
 * Find Pairs with hash table technique. The technique is simple, instead of using addition,
 * we use substraction to get the pair, then just look at the hash table record.
 *
 * BIG O Time Complexity = O(n)
 * -
 * @param {Array<Number>} arr 
 * @param {Number} target
 */
function FindPairs(arr, target) {
    if (arr.length === 0) return [];

    const visited = new Map();
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        const val = arr[i];
        const pair = target - val;

        // check if the pair is available in the visited.
        // if so that means the pair is available, push to the result.
        if (visited.has(pair)) {
            console.log(`Pair found at ${visited.get(pair)} and ${i} (${pair} + ${val})`);
            result.push([visited.get(pair), i]);
        }

        // mark current value as visited.
        visited.set(val, i);
    }

    // sort by indices, i am not sure why the order is messed up
    return result.sort((a, b) => a[0] - b[0]);
}

const pairs = [1, 3, 5, 7, 2, 4];
const target = 8;
FindPairs(pairs, target);

module.exports = { ValidatePassword, FindPairs };
