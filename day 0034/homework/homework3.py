# შექმენით ფუნქცია, რომელიც არგუმენტად იღებს რიცხვების სიას და აბრუნებს მას კლებადობის მიხედვით დასორტირებულს
def Sort_by_descending_order(numbers_lists):
    numbers_lists=sorted(numbers_lists,reverse=True)
    return numbers_lists
print(Sort_by_descending_order([1,3,5,6,2,12,7]))
