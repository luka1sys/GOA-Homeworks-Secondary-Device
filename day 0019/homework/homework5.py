           #შექმენით რიცხვების სია, გადაუარეთ მას for loop-ით,
           #  გაიგეთ რამდენი ლუწი და რამდენი კენტი რიცხვი გვაქვს სიაში და დაბეჭდეთ მათი რაოდენობა

numbers = [10, 21, 4, 45, 66, 93, 1]
even=0
odd= 0
for num in numbers:
    if num % 2 == 0:
        even += 1
    else:
        odd += 1
print( "even is "+str(even))
print("odd is "+str(odd))