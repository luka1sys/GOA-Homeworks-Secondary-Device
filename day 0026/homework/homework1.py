            #შექმენით ფუნქცია, რომელიც მიიღებს წინადადებას, ფუნქციამ ამ წინადადების თითოეული სიტყვა უნდა შეინახოს სიაში, 
            # როგორც ცალკე ელემენტი. საბოლოოდ გადააქციეთ სია ისევ წინადადებად, სადაც სიტყვებს შორის არის მძიმე და ერთი დაშორება(", ")
def Save_the_word_to_the_list(proposal):
    list1=[]
    proposal=proposal.split(" ")
    list1.append(proposal)
    return_the_word_with_commas=", ".join(proposal)
    return return_the_word_with_commas
print(Save_the_word_to_the_list("hello may name is luka"))
