# while true
#   puts "wow!"
# end

# Control-c to cancel a running Ruby program

# while
# initialize, conditional, update
#
# i = 0       # initialize
# while i < 5 # conditional
#   puts "i is now #{ i }"
#   i += 1    # update
# end

# if    => unless
# while => until

# i = 0        # initialize
# until i == 5 # conditional: continues while false
#   puts "i is now #{ i }"
#   i += 1     # update
# end

# Iterators: Ruby's preferred method of iterating/looping
# No mess, no fuss

# 7.times { puts "Hello world" }

5.times do |i| # the value of `i` will be the number of this iteration
  puts "i is now #{ i }"
end

# There are dozens of iterators. For example, to count backwards:
4.downto(0) do |n|
  puts "n is now #{ n }"
end
