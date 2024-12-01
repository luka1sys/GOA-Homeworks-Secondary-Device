         #შექმენით ფუნქცია, რომელიც მიიღებს წინადადებას და დაბეჭდავს მის თითოეულ სიტყვაში სიმბოლოების რაოდენობას(ცალ-ცალკე)
def Understanding_the_number_of_characters(proposal):
    list1=[]
    proposal=proposal.split(" ")
    for i in proposal:
        quantity=len(i)
        list1.append(quantity)
    return list1
print(Understanding_the_number_of_characters("how are youag"))
        

