# შექმენთ ფუნქცია, რომელიც არგუმენტად იღებს სიმბოლოების სიას. დაასორტირეთ ეს სია ანბანის მიხედვით,
#  გადააქციეთ string-ად და დააბრუნეთ
def sorting(symbol_list):
    sorted_symbol_list=sorted(symbol_list)
    sorted_symbol_list="".join( sorted_symbol_list)
    return sorted_symbol_list
print(sorting("luka"))




