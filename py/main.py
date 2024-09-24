import re

specialFormat = re.compile(r"[^0-9a-zA-Z ]+")
uppercaseFormat = re.compile(r"[A-Z]")
lowercaseFormat = re.compile(r"[a-z]")
digitFormat = re.compile("[0-9]")

def validatePassword(password) -> bool:
    if len(password) < 15:
        return False

    print(password)

    totalPass = 0

    # check if string contains special character
    if re.search(specialFormat, password):
        print("special detected")
        totalPass += 1

    print(totalPass)

    # check if string have uppercase letter (A-Z)
    if re.search(uppercaseFormat, password):
        totalPass += 1

    # check if string have lowercase letter (a-z)
    if re.search(lowercaseFormat, password):
        totalPass += 1

    # check if string have digit letter (0-9)
    if re.search(digitFormat, password):
        totalPass += 1

    if totalPass >= 2:
        return True
    return False

input = [
    "Fxmedia12345678@", "AnotherSecurePwd$567", "SuperP@ssphrase123", "ShortPwd1!", "Password", "lowercaseonly", "MISSINGUPPERANDSPECIAL"
]

for val in input:
    valid = validatePassword(val)
    print(f"Password {val} is {valid}");

def findPairs(arr, target) -> list:
    if len(arr) == 0:
        return list()

    visited = dict()
    result = list()

    for index, val in enumerate(arr):
        pair = target - val;

        # check if the pair is available in the visited.
        # if so that means the pair is available, push to the result.
        if pair in visited:
            print(f"Pair found at {visited[pair]} and {index} ({pair} + {val})");
            result.append([visited[pair], index]);

        # mark current value as visited.
        visited[val] = index

        pass

    # sorted by indices
    return sorted(result, key=lambda x: x[0])

pairs = [1, 3, 5, 7, 2, 4]
target = 8
findPairs(pairs, target)

