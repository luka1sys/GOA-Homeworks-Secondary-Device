                #შექმენით ფუნქცია, რომელიც იღებს წინადადებას, სადაც ყოველი სიტყვის შორის ერთზე მეტი დაშორებაა(space).
                #  თქვენი დავალებაა ჩამოაშოროთ გადმოცემულ წინადადებას ზედმეტი space-ები(სიტყვებს შორის მხოლოდ ერთი უნდა იყოს). 
                # საბოლოოდ დააბრუნეთ ეს წინადადება
def delete_spaces(proposal):
    proposal=" ".join(proposal.split())
    return proposal
print(delete_spaces("hello   world"))
