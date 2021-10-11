def show_menu
  puts "Calculator" # TODO: Check out .center to make this look nicer
  puts "=-" * 40 # Budget horizontal dividing line
  puts "[a] - Addition"
  # TODO: Add the other operations here (multiply, divide, subtract)
  puts "[q] - Quit"
  print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
    puts "You chose addition!"
    puts "Addition coming soon" # TODO: actually do the addition
  # add additonal `when` clauses for the other menu options
  else
    puts "Invalid selection. You idiot."
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator."
