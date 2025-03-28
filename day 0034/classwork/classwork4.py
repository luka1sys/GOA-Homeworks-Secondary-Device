#შექმენით manual_replace ფუნქცია, რომელიც იქნება .replace() ფუნქციის კლონი.
#  ამ ფუნქციამ სთრინგში არსებული sapce-ები უნდა შეცვალოს ტირეებად
def manual_replace(text, old, new):
    result = ""
    for char in text:
        if char == old:
            result += new 
        else:
            result += char 
    
    return result


text = "This is a test string"
new_text = manual_replace(text, ' ',"_" )
print(new_text)
