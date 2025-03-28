        #შექმენით ფუნქცია, რომელსაც გადაეცემა სახელების სია.
        #  შექმენით ახალის სია, სადაც ჩაამატებთ გადმოცემული სიიდან მხოლოდ იმ სახელებს, რომლებიც იწყება "N"-ზე`. საბოლოოდ დააბრუნეთ ეს სია
def filter_names_start_with_n(names_list):
    names_with_n = [] 
    
    for name in names_list:
        if name.startswith("a"):
            names_with_n.append(name)
    return names_with_n  
print(filter_names_start_with_n(["ana", "saba", "andria", "alexsandra", "nika"]))