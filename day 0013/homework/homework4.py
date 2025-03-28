# შექმენით სია შემდგარი სახელებისგან. მომხარებელს შემოატანინეთ მისი სახელი, თუ მისი სახელი იქნება 5 სიმბოლოს ტოლი ან მეტი.
#  ჩაამატეთ სიაში, სხვა შემთხვევაში დაუბეჭდეთ "Name is too short"
names=["luka", "saba", "nika", "irakli"]
your_name=input("enter your name: ")
if len(your_name) >=5:
    names.append(your_name)
    print(names)
else:
    print("Name is too short")