#შექმენით რიცხვების სია, while loop-ის გამოყენებით გაიგეთ ამ სიაში ყველა ლუწი რიცხვის ჯამი და დაპრინტეთ


numbers = [1,2,3,4,5,6,7,8,9,10, 100 , 238, 8756]

sum = 0
index = 0

while index != len(numbers):
    if numbers[index] % 2 == 0:
        sum += numbers[index]

    index += 1

print(sum)