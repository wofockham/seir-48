# n! = n * (n-1)!

require 'pry'

def factorial_iterative(n) # initial
  result = 1
  while n > 1              # conditional
    result *= n            # mutation
    n -= 1                 # mutation: move towards the conditional being false
  end

  result                   # implicitly returned
end

# No loop, no recursion, no wife, no horse, no moustache
def factorial_recursive(n)
  if n <= 1                      # base case
    1
  else
    n * factorial_recursive(n-1) # move towards the base case
  end
end

binding.pry
