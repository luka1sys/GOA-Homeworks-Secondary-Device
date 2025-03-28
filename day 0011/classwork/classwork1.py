


secret_pass = "goa1234"
user_pass = ''

tries = 3

while tries > 0 and user_pass != secret_pass:
    user_pass = input("Enter your password (you have " + str(tries) + " tries left): ")
    tries = tries - 1

    if user_pass == secret_pass:
        print("Access granted!")
    elif tries == 0:
        print("You've reached the maximum number of tries. Access denied!")
    else:
        print("Access denied! Try again.")











