# import random
# 
# random_integer = random.randint(1, 10)
# print(random_integer)
# 
# random_float = random.random()
# print(random_float)
# 
# states = ["Texax", "Delaware", "Pennsylvania"]

import random

namesString = input("Give me everybody's names, separated by a comma. ")
names = namesString.split(", ")

person = names[random.randint(0, len(names)-1 )]

print(f"{person} is going to buy the meal today!")