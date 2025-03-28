#შექმენით რიცხვების სია სადაც გექნებათ დადებითი და უარყოფითი რიცხვები, 
# შემდეგ შექმენით ახალი სია სადაც გექნებათ მხოლოდ უარყოფითი რიცხვები და დაბეჭდეთ ის(გამოიყენეთ while).

numbers = [10, -3, 5, -8, 12, -1, 7, -4, 0, 15]
negative_numbers = []
index = 0
while index < len(numbers):
    if numbers[index] < 0:
        negative_numbers.append(numbers[index])
    index =index+1
print( negative_numbers)