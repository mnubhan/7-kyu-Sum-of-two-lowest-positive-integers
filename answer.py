def sum_two_smallest_numbers(numbers):
    return sum(sorted(numbers)[:2])
 
def sum_two_smallest_numbers(num_list):
    num_list.sort()
    return num_list[0] + num_list[1]
