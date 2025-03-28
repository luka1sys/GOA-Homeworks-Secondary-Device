          #შექმენით ფუნქცია, რომელიც იღებს წინადადებას, და მასში space-ების მაგივრად სიტყვებს შორის ჩასვამს ტირეს("-").
          #  საბოლოოდ კი აბრუნებს მას

def Inserting_dashes_between_sentences(proposal):
    proposal=proposal.replace(" ","-")
    return proposal
print(Inserting_dashes_between_sentences("where do you live"))