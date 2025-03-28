#შექმენით პროგრამა, რომელიც მომხარებელს შემოატანინებს წელს და დაპრინტავს რომელი საუკუნეა ის
year=int(input("enter year: "))
if year%100==0:
    counter=year//100
    
else:
    counter=(year//100)+1
    print(counter)