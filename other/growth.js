/**
 *
 * @param {number} MonthlyInvestment
 * @param {number} Growth
 * @param {number} length
 * @return {number}
 */

function growth(MonthlyInvestment, Growth, length) {
    let months = length * 12;
    let times = (100 + (Growth / 12)) / 100
    let ans = 0;
    let fullAns = months * MonthlyInvestment;

    while (months > 1) {
        ans += MonthlyInvestment;
        ans *= times;
        months--;
    }


    console.log(fullAns, ans)
    return ans;
}

growth(250, 10, 20)