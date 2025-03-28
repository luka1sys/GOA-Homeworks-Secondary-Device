              # შექმენით ფუნქცია, რომელსაც გადაეცემა წინადადება. 
              # თქვენი დავალებაა ამ წინადადების სიტყვები შეაბრუნოთ და დააბრუნოთ(სიტყვების სიმბოლოები არ უნდა იყოს შებრუნებული)

               # მაგალითად: "Hello World!" >>> "World! Hello"
def Reversal_of_words(proposal):
    proposal=proposal.split(" ")
    reversed_proposal=proposal[::-1]
    result=" ".join( reversed_proposal)
    return result
print(Reversal_of_words("Hello World!" ))