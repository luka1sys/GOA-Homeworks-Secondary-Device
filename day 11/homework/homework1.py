secret_pass = "luka1234" #ცვლადში შევინახეთ  ჩვენი პაროლი
user_pass = '' # აქ შევქმენით ცვლადი სადაც მომხმარებლის მიერ შეყვანილი  პაროლი განთავსდება 

tries = 3 #მცდელობის მაქსიმალური რაოდენობა 

while tries > 0 and user_pass != secret_pass: # აქ ვიყენებთ and ოპერატორს სანამ tries>0 მაქამდე დაბეჭდავს შედეგს და ასევე use_pass ვადარებთ seqret_pass
    user_pass = input("Enter your password (you have " + str(tries) + " tries left): ") # ვიყენებთ input ფუნქციას რათა  მომხმარებელმა უნდა შეიტანოს პაროლი
    tries = tries - 1   

    if user_pass == secret_pass: #  აქ ვამბობთ რომმ თუ მომხმარებლის მიერ შემოყვანილ პაროლი ტოლია  ჩაფიქრებული პაროლის 
        print("Access granted!") # ვბეჭდავთ რომ სწორია  
    elif tries == 0: # თუ  ცდა 0 ის ტოლი იქნება 
        print("You've reached the maximum number of tries. Access denied!") #ვბეჭდავთ რომ თქვენ მიაღწიეთ ცდების მაქსიმალურ რაოდენოაბს 
    else:       # სხვა შემთხვევაში
        print("Access denied! Try again.") # ვბეჭდავთ რომ  სცადეთ ხელახლა 