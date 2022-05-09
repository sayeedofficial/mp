import ast

value = input()
response = ast.literal_eval(value)


age = int(response["iage"])
gender = response["igender"]
blinkrate = int(response["iblinkrate"])
redness = response["iredness"]
burning_sensation = response["iburning_sensation"]
screen_time = int(response["iscreen_time"])
scratchy_level = response["iscratchy_level"]
blurred_vision = response["iblurred_vision"]
dryness = response["idryness"]

if age > 18 : 
    print("Yes")
else:
    print("No")