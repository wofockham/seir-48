# lr.rb - A Ruby line reader (equivalent to cat)
# Usage: ruby lr.rb flintstones.txt

ARGF.each do |line|
  puts line if line =~ /b/
end
