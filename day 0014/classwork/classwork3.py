nums= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


even_sum = 0
odd_sum = 0

for nums in nums:
    if nums % 2 == 0:
        even_sum =even_sum+ nums 
    else:
        odd_sum = odd_sum +nums


print( even_sum)
print(odd_sum)   

