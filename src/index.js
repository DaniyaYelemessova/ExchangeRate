import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-service';


function handleFormSubmission(e){
  e.preventDefault();
  const baseCurrency = document.querySelector("#baseCurrency").value;
  const targetCurrency = document.querySelector("#convertedCurrency").value;
  const amount = parseFloat(document.querySelector("#amount").value);
  document.querySelector("#amount").value = null;

  
  if(!isNaN(amount)){
    getCurrency(baseCurrency, targetCurrency, amount);
  }else{
    console.error("Invalid amount. Please enter a valid number");
  }
}


document.getElementById("form").addEventListener("submit", handleFormSubmission);

