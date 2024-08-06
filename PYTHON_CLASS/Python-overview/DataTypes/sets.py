myset = {"Pyhton", "banana", "cherry", "banana", False, 0, 1} #unordered, unchangeable, and unindexed
print(myset)
print(type(myset)) #defined as objects

for x in myset:
    print(x)

myset.add("mangoes") #add new items
print(myset)

myset.remove("banana")
print(myset)

myset.pop() #removes and returns an arbitrary set element. Raise KeyError if set is empty.
print(myset)

myset.clear()
print(myset)

#program to sum all indices in the set
# set1 = {1, 2, 3, 4, 5, 6, 7, 8, 9}

# for i in range(len(set1)):
#     result = i+ i
#     print(result)

#program to calcualte the sum of the els in the set
set1 = {1, 2, 3, 4, 5, 6, 7, 8, 9}
total_sum = 0
for item in set1:
    total_sum += item
    print(total_sum)