# შექმენით ფუნქცია manual_pop, რომელსაც გადაეცემა ორი არგუმენტი, სია და ინდექსი. წაშალეთ სიიდან, გადმოცემულ ინდექსზე მყოფი ელემენტი.
#  საბოლოოდ კი დააბრუნეთ ეს სია(არ გამოიყენოთ .pop ფუნქცია)
def manual_pop(input_list, index):
    
    result = []
    for i in range(len(input_list)):
        if i != index:
            result.append(input_list[i])
    return result
print(manual_pop([22,14,11,5],2))