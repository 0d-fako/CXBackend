
# Description
# The input will be a list of integers, each separated by a newline character.
# The first line of the input will be an integer N (1 <= N <= 100), indicating the number of test cases to follow.
# Each of the test cases will consist of a line with an integer X (0 < X <= 100), followed by another line consisting of X number of space-separated integers Yn (-100 <= Yn <= 100).
# For each test case, calculate the power of four of Yn, excluding when Yn is positive, and print the calculated sum in the output.
# Note: There should be no output until all the input has been received.
# Note 2: Do not put blank lines between test cases solutions.
# Note 3: Take input from standard input, and output to standard output.
# Note 4: The final output is guaranteed to be within the int32 range.
# Note 5: It is possible that X and the number of integers Yn may not be equal. If that is the case, print -1 as the output.


# Your source code must be a single file, including at least a main function.
# Do not use any for loop, while loop, or any list / set / dictionary comprehension.
# Your solution will be tested against Python 3.13 (as of January 2025) or higher.
# Do not use any external libraries or modules.


def power_of_four(n):
    return n ** 4 if n < 0 else 0

def process_test_cases(test_cases, index=0, results=[]):
    if index >= len(test_cases):
        return results
    
    tc = test_cases[index]
    if len(tc) != tc[0] + 1:
        return process_test_cases(test_cases, index + 1, results + [-1])
    
    def calculate_sum(tc, i=1, result=0):
        if i >= len(tc):
            return result
        return calculate_sum(tc, i + 1, result + power_of_four(tc[i]))

    return process_test_cases(test_cases, index + 1, results + [calculate_sum(tc)])

def main():
    import sys
    data = sys.stdin.read().split("\n")
    
    try:
        num_cases = int(data[0])
        def extract_cases(i=1, cases=[]):
            if i >= len(data) or len(cases) >= num_cases:
                return cases
            try:
                x = int(data[i])
                numbers = list(map(int, data[i + 1].split()))
                return extract_cases(i + 2, cases + [[x] + numbers])
            except:
                return [-1]

        test_cases = extract_cases()
        results = process_test_cases(test_cases)
        print("\n".join(map(str, results)))
    
    except ValueError:
        print(-1)

if __name__ == "__main__":
    main()