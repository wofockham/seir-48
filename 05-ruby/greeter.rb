# greeter.rb - a program to greet you

# demonstrates input and ouput

puts "Welcome to the greeter program" # console.log: puts includes a newline at the end.

print "What is your name: " # print does not append a newline
name = gets.chomp # gets: get string from the keyboard, chomp: removes the new line

puts "Hello #{ name }."

print "What is your surname: "
surname = gets.chomp

puts "Your full name is #{ name.capitalize } #{ surname.upcase }."

print "Where do you live: "
address = gets.chomp

puts "Your name is #{ name } #{ surname } and you live at #{ address }."
