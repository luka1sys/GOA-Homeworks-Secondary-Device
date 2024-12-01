         #შექმენით ფუნქცია, რომელსაც გადაეცემა ორი რიცხვების სია, გადაურეთ ორივეს for ციკლით და გაიგეთ თითოეულ სიაში რიცხვების ჯამი
         # (შეინახეთ ცალკე ცვლადებში), გაამრავლეთ ორივე ერთმანეთზე და დააბრუნეთ

def list1(numbers_list1,numbers_list2):
    sum1=0
    sum2=0
    for i in numbers_list1:
        sum1+=i
    for i in numbers_list2:
        sum2+=i
        result=sum1*sum2
    return result
print(list1([2,5,7,8,11], [22,4,2,8]))