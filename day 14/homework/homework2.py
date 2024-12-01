#შექმენით სია სადაც ჩაამატებთ ყველა რიცხვს 1-დან 50-ის ჩათვლით. 
# შემდეგ გადაუარეთ for loop-ით და ამ სიიდან წაშალეთ ყველა კენტი რიცხვი. 
# საბოლოოდ დაპრინტეთ მიღებული სია
numbers = []
for i in range(1, 51):
 numbers.append(i)
 for num in numbers:  
    if num % 2 != 0:    
        numbers.remove(num)
print(numbers)