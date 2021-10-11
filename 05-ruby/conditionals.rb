# Ruby has a rich framework for asking questions (conditionals)

n = 1001

if n > 5
  puts "n is greater than 5"
else
  puts "n is less than or equal to 5"
end

# multiple possibilities:

grade = 'F'

# In ruby: == is enough to give you strict equality
if grade == 'A'
  puts "You are killing it!"
elsif grade == 'B'
  puts "You are coasting fine"
elsif grade == 'C'
  puts "Adequate"
else # default
  puts "Please see Rowena 'The Bruiser' after class"
end

# TODO: research `case` statement

# Ruby's bonus conditionals:

# Short AKA modifier AKA backwards if statement
# Only works if: no else part AND the body is only a single line.
puts "The number n is bigger" if n > 5

# The opposite of if:
today_is_wednesday = false
#
# if today_is_wednesday != true
#   puts "It is not Wednesday"
# end

# The opposite of `if` is `unless`
unless today_is_wednesday
  puts "It is not Wednesday"
end

# unless also has a modifier form:
puts "It is not Wednesday" unless today_is_wednesday
