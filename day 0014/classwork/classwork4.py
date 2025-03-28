numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


even_numbers = []

for number in numbers:
    if number % 2 == 0:
        even_numbers.append(number)  

if len(even_numbers) > 0:
    aritmetic_pass = sum(even_numbers) / len(even_numbers)
else:
    average = 0

print(even_numbers)
print( aritmetic_pass)

