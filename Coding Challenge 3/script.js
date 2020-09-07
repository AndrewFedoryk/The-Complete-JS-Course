var bills = [124,48,268];
var allTips = [];
var summTipsAndBills = [];
function calcTips(payed) {
	var tip;
  if (payed < 50) {
  	tip = payed * (20/100);
    allTips.push(tip);
    summTipsAndBills.push(tip+payed);
    console.log(tip + " it's tip from 50$");
  }
  else if (payed > 50 && payed < 200){
    tip = payed * (15/100);
    allTips.push(tip);
    summTipsAndBills.push(tip+payed);
    console.log(tip + " it's tip from 50-200$");
  }
  else if (payed > 200){
    tip = payed * (10/100);
    allTips.push(tip);
    summTipsAndBills.push(tip+payed);
    console.log(tip + " it's tip from 200$");
  }
  
}
bills.forEach(calcTips);
console.log(allTips,summTipsAndBills);
