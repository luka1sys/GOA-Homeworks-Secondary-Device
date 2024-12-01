           # შექმენით პროგრამა, რომელიც მომხარებელს შემოატანინებს რიცხვს და დაბეჭდავს 1-დან შემოტანილ რიცხვამდე ყველა მარტივ რიცხვს

number=int(input("enter number: "))
result=[]


for num in range(1,number):
    dividers=[]
    for i in range(1,num+1):
     if num%i==0:
        dividers.append(i)
    if len(dividers)==2:
        print(num)





