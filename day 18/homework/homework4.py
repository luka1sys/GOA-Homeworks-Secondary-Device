          #შექმენით სახელების სია, გადაუარეთ მას for loop-ით და დაბეჭდეთ ამ სიიდან მხოლოდ ის სახელები, რომლებიც იწყებიან "A"-ზე
names=["nika", "saba", "ana", "alexsi", "amiko", "luka"]
for name in names:
    if name.startswith("a"):
        print(name)