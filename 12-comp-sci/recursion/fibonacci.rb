# Fibonacci Sequence: fib(n) = fib(n-1) + fib(n-2)
# 1 2 3 4 5 6  7  8  9 10
# 1 1 2 3 5 8 13 21 34 55

require 'pry'

def fibonacci_iterative(n) # initial
  result = 1
  a = 1
  b = 1
  while n > 2
    # parallel assignment: atomic
    a, b = b, a+b
    n -= 1
  end

  b
end


def fibonacci_recursive(n)
end

binding.pry
