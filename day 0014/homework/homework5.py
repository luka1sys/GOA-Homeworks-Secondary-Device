 #შექმენით ორი ცარიელი სია, for loop-ის გამოყენებით მომხარებელს 5-ჯერ შემოატანინეთ ნებისმიერი სიტყვა.
 #თუ შემოტანილი სიტყვის სიგრძე არ აღემატება 5-ს ჩაამატეთ პირველ სიაში, სხვა შემთხვევაში მეორეში. საბოლოოდ დაბეჭდეთ ორივე სია

words1=[]
words2=[]
for i in range(5):
    i=input("enter word: ")
    if len(i) <=5:
        words1.append(i)
    elif len(i) >5:
     words2.append(i)
print(words1)
print(words2)








