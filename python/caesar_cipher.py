from operator import le
import re

def caesar_cipher(string, shift_amount):
    ciph_list= []
    str_list= list(string)
    pattern = "[A-Za-z]"

    for x in str_list:
        if x.isalpha():
            ciph_list.append(shifter(x,shift_amount))
        else:
            ciph_list.append(x)

    return "".join(ciph_list)            

def shifter(char, num_to_shift):
    shift_num = num_to_shift*2
    letters = ['A','a','B','b','C','c','D','d','E','e','F','f','G','g','H','h','I','i','J','j','K','k','L','l','M','m','N','n','O','o','P','p','Q','q','R','r','S','s','T','t','U','u','V','v','W','w','X','x','Y','y','Z','z']
    char_index = letters.index(char) + shift_num
    if char_index > 51:
        char_index -= 52
    elif char_index < 0:
        char_index = 52 + char_index
    return letters[char_index]        


