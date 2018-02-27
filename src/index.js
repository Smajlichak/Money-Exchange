// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var coins = [[50, "H"], [25, "Q"], [10, "D"], [5, "N"], [1, "P"]],i, l, count, exchange = {};
    if (currency > 10000) {
    	exchange.error = "You are rich, my friend! We don't have so much coins for exchange";
    }
    else if (currency > 0){
    	for (i = 0, l = coins.length; i < l; i++){
    		count = 0;
    		while (currency >= coins[i][0]){
					count++;
    			currency = currency - coins[i][0];
    			exchange[coins[i][1]] = count;
  			}
    	}
    }
    return exchange;
}
