class Bank
  attr_reader :name, :accounts # getters

  def initialize(n)
    @name = n
    @accounts = {}
  end

  def create_account(account_name, starting_deposit)
    @accounts[account_name] = starting_deposit
  end
end
