#შექმენით ხილების სია სადაც გექნებათ მინიმუმ 10 ელემენტი,
#  while loop-ის გამოყენებით წაშალეთ სიის ბოლო ელემენტი იქამდე სანამ სიაში არ დარჩება ორი ელემენტი.
#  ყოველი ელემენტის წაშლისას დაბეჭდეთ ხილების სია
fruit=["banana", "apple", "Peach", "Watermelon", "Grape", "Grapefruit", "Cherry", "Melon", "Pineapple", "Lemon" ]
while len(fruit) >2:
    fruit.pop()
    print(fruit)