var jhonFamily = {
    allTips: [],
    summTipsBills: [],
    bills: [124, 48, 268, 180, 42],
    tipCalc : function() {
        var tip;
         for (var i = 0; i < this.bills.length; i++ ){
            if (this.bills[i] <= 50) {
                tip = this.bills[i] * (20/100);
                this.allTips.push(tip);             
                this.summTipsBills.push(tip+this.bills[i]);
                // console.log(tip + " it's tip from 50$");
            }
            else if (this.bills[i] > 50 && this.bills[i] <= 200) {
                tip = this.bills[i] * (15/100);
                this.allTips.push(tip);
                this.summTipsBills.push(tip+this.bills[i]);
                // console.log(tip + " it's tip from 50$-200$");
            }
            else  if (this.bills[i] > 200) {
                tip = this.bills[i] * (10/100);
                this.allTips.push(tip);
                this.summTipsBills.push(tip+this.bills[i]);
                // console.log(tip + " it's tip from more then 200$");
            };
        }
    }
};
jhonFamily.tipCalc();
console.log(jhonFamily.allTips + " all tips what spend Jhon's family and summ of tips and  bills payed in restrant " + jhonFamily.bills);

var markFamily = {
    allTips: [],
    summTipsBills: [],
    bills: [77, 375, 110, 45],
    tipCalc : function() {
        var tip;
         for (var i = 0; i < this.bills.length; i++ ){
            if (this.bills[i] <= 100) {
                tip = this.bills[i] * (20/100);
                this.allTips.push(tip);             
                this.summTipsBills.push(tip+this.bills[i]);
                // console.log(tip + " it's tip from bill less then 100$");
            }
            else if (this.bills[i] > 100 && this.bills[i] <= 300) {
                tip = this.bills[i] * (10/100);
                this.allTips.push(tip);
                this.summTipsBills.push(tip+this.bills[i]);
                // console.log(tip + " it's tip from 100$-300$");
            }
            else  if (this.bills[i] > 300) {
                tip = this.bills[i] * (25/100);
                this.allTips.push(tip);
                this.summTipsBills.push(tip+this.bills[i]);
                // console.log(tip + " it's tip from more then 300$");
            };
        }
    }
};
markFamily.tipCalc();
console.log(markFamily.allTips + " all tips what spend Mark's family and summ of tips and  bills payed in restrant " + markFamily.bills);

function averageTipCalc(tips){
    var summ = 0;
    var averageSumm
    for (var i = 0; i < tips.length; i++) {
        summ = summ + tips[i];
    }
    return averageSumm = summ / tips.length;
    
}
// if (averageTipCalc(markFamily.allTips) > averageTipCalc(jhonFamily.allTips)) {
//     console.log;
// }
averageTipCalc(markFamily.allTips) > averageTipCalc(jhonFamily.allTips) ? console.log("Mark family have highest average tips " + averageTipCalc(markFamily.allTips) + " then jhon " + averageTipCalc(jhonFamily.allTips)) : console.log("Jhon's family have highest average tips " + averageTipCalc(jhonFamily.allTips) + " then Mark " + averageTipCalc(markFamily.allTips));