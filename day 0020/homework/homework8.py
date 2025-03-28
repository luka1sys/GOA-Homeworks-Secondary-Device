              # შექმენით ფუნქცია, რომელსაც გადაეცემა რიცხვების სია.
              #  გადაუარეთ ამ სიას while ციკლით და ჩაამატეთ გაორმაგებული რიცხვები ახალ სიაში. საბოლოოდ დააბრუნეთ ეს სია

def list1(numbers_list):
 new_numbers_list=[]
 index=0
 while index<len(numbers_list):
       
       result=numbers_list[index]*2
       new_numbers_list.append(result)
       index+=1
 return new_numbers_list
print(list1([7,8,4,2,6]))