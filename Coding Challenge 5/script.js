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
                console.log(tip + " it's tip from 50$");
            }
            else if (this.bills[i] > 50 && this.bills[i] <= 200) {
                tip = this.bills[i] * (15/100);
                this.allTips.push(tip);
                this.summTipsBills.push(tip+this.bills[i]);
                console.log(tip + " it's tip from 50$-200$");
            }
            else  if (this.bills[i] > 200) {
                tip = this.bills[i] * (10/100);
                this.allTips.push(tip);
                this.summTipsBills.push(tip+this.bills[i]);
                console.log(tip + " it's tip from more then 200$");
            };
        }
    }
};
//jhonFamily.tipCalc();

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
                console.log(tip + " it's tip from bill less then 100$");
            }
            else if (this.bills[i] > 100 && this.bills[i] <= 300) {
                tip = this.bills[i] * (10/100);
                this.allTips.push(tip);
                this.summTipsBills.push(tip+this.bills[i]);
                console.log(tip + " it's tip from 100$-300$");
            }
            else  if (this.bills[i] > 300) {
                tip = this.bills[i] * (25/100);
                this.allTips.push(tip);
                this.summTipsBills.push(tip+this.bills[i]);
                console.log(tip + " it's tip from more then 300$");
            };
        }
    }
};
markFamily.tipCalc();
console.log(markFamily.allTips);
function averageTipCalc(tips){
    var average = 0;
    for (var i = 0; i < tips.length; i++) {
        average = average + i;
    }
    console.log(average);
}
averageTipCalc(markFamily.allTips);