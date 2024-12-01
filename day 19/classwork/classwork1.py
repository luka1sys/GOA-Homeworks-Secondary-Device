# შექმენით რიცხვების სია, შემდგარი მინიმუმ 10 ელემენტისგან. გადაუარეთ ამ საის while loop-ის გამოყენებით.
#  გაიგეთ ცალკე ლუწი და კენტი რიცხვების ჯამი, საბოლოოდ შეადარეთ ისინი ერთმანეთს და დაპრინტეთ უდიდესი


numbers=[4,5,2,8,12,32,44,18,20]
even_sum = 0
odd_sum = 0
num = 0
while num < len(numbers):
    if numbers[num] % 2 == 0:
        even_sum += numbers[num]  
        
    else:
        odd_sum += numbers[num]   
    num+= 1
if even_sum > odd_sum:
    print (even_sum)
elif odd_sum > even_sum:
    print( odd_sum)
else:
 print(even_sum)