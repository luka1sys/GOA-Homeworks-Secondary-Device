#შექმენით ხილების სია, სადაც გექნებათ მინიმუმ 3 ელემენტი. მომხარებელს შემოატანინეთ თავისი საყვარელი ხილი,
#  თუ სიის ბოლო ელემენტის ინდექსი არის ლუწი ჩაამატეთ შემოტანილი ხილი სიაში, სხვა შემთხვევაში არ ჩაამატოთ 
fruit_list=["banana", "apple",  "Watermelon", "Peach"]
favorite_fruit=input("enter favorite fruit: ")
if len(fruit_list)%2==0:
    fruit_list.append(favorite_fruit)
    print(fruit_list)
else:
  print(fruit_list)