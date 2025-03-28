#დაწერეთ პროგრამა, რომელიც მომხამრებელს შემოატანინებს რიცხვს და აბრუნებს სიას, სადაც იქნება გამდოცემული რიცხვის ყველა გამყოფი
number=int(input("enter number: "))
list=[]
for i in range(1, number+1):
    if number%i==0:
     list.append(i)
print(list)