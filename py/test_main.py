import pytest
from main import validatePassword, findPairs

def testShortPassword():
    assert validatePassword("ShortPwd1!") == False
    assert validatePassword("!@123xA") == False

def testValidPassword():
    assert validatePassword("Fxmedia12345678@") == True
    assert validatePassword("AnotherSecurePwd$567") == True
    assert validatePassword("SuperP@ssphrase123") == True
    assert validatePassword("SuperTax!MoreThan3n0ugh") == True

def testOnlyOneCond():
    assert validatePassword("lowercaseonly") == False
    assert validatePassword("UPPERCASEONLY") == False
    assert validatePassword("1234567890123456789012345") == False

def testTwoCond():
    assert validatePassword("lowercaseandUPPERCASE") == True
    assert validatePassword("lowercaseand!@#$%^&") == True
    assert validatePassword("lowercaseand123456") == True
    assert validatePassword("UPPERCASEAND!@#$%^&") == True
    assert validatePassword("UPPERCASEAND123456") == True

def testEdgeCases():
    assert validatePassword("") == False
    assert validatePassword("                                               a") == False

def testValidPairs():
    arr = [1, 2, 3, 4, 5]
    target = 5
    expected = [[0, 3], [1, 2]]
    assert findPairs(arr, target) == expected

    target = 6
    expected = [[0, 4], [1, 3]]
    assert findPairs(arr, target) == expected

def testNegativePairs():
    arr = [-1, -2, -3, -4, -5]
    target = -5
    expected = [[0, 3], [1, 2]]
    assert findPairs(arr, target) == expected

def testNotFound():
    arr = [1, 2, 3, 4, 5]
    target = 99
    assert findPairs(arr, target) == []

def testEmpty():
    assert findPairs([], 100) == []
