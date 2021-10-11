# ### 3. Sydney Suburbs
# - Create a program that asks what suburbs you live in.
# - Depending on the answer, print an appropriate response of your choosing

print "In which suburb do you reside: "
residence = gets.chomp.capitalize

# v2 case

puts case residence
when 'Bondi'
  "Wow beaches etc"
when 'Glebe'
  "Nice foreshore walk"
when 'Newcastle'
  "That's not really Sydney is it?"
else
  "That's probably a very nice place"
end


# v1 if/elsif

# if residence == 'Bondi'
#   puts "Wow beaches etc"
# elsif residence == 'Glebe'
#   puts "Nice foreshore walk"
# elsif residence == 'Newcastle'
#   puts "That's not really Sydney is it?"
# else
#   puts "That's probably a very nice place"
# end
