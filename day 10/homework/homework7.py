count=0
secret_number="7"
my_number=input(" Enter a number from 1 to 20: ")
while my_number!=secret_number:
    count=count+1
    if my_number>secret_number:
     print("To high,")
    elif my_number<secret_number:
     print("too low")



    my_number=input(" Enter a number from 1 to 20: ")
print("You win")