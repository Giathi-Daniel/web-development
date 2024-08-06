// A simple banking system
class BankAccount{
    constructor(accountNumber, name, balance){
        this.accountNumber = accountNumber;
        this.name = name;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
        console.log(`Deposited ${amount} into acccount ${this.accountNumber}`);
    }

    withdraw(amount){
        if (amount > this.balance) {
            console.log("Insufficient balance to withdraw");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from acccount ${this.accountNumber}`);
        }
    }

    getBalance(){
        return this.balance;
    }
}


// USER INPUT
const accountNumber = prompt("Enter your account");
const name = prompt("Enter your name");
const initialBalance = parseFloat(prompt("Enter your initial balance"));

// creating BankAccount Instance
const bankAccount = new BankAccount(accountNumber, name, initialBalance);

// user interface
const choice = prompt("Enter 'D' for deposit, 'W' for withdrawal, or 'B' to check balance")

if (choice === 'D') {
    const depositAmount = parseFloat(prompt("deposit amount:: "));
    bankAccount.deposit(depositAmount);
} else if (choice === 'W') {
    const withdrawAmount = parseFloat(prompt("Enter withdrawal amount::"));
    bankAccount.withdraw(withdrawAmount);
} else if  (choice === 'B') {
    alert(`Balance for account ${bankAccount.accountNumber}: ${bankAccount.getBalance()}`)
} else {
    alert("Invalid choice")
}