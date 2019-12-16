/**
 * Leap Yeara
 */
module.exports = {
    LeapYear=(year) => {
        if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
            return true;
        }
        else {
            return false;
        }
    }
},

    /**
     * wind chill
     */
    exports = {
        WindChill =(t, v) => {
            try {

                let w = 35.74 + 0.6215 * t + (0.4275 * t - 35.75) * Math.pow(v, 0.16);
                return w;
            }
            catch (e) {
                console.log(e);
            }
        }

    },
    /**
     * Quadratic
     */
    exports = {
        Quadratic=(a, b, c) => {
            try {
                let delta = Math.sqrt((b * b) - (4 * a * c));
                root1 = (-b + Math.sqrt(delta)) / (2 * a);
                root2 = (-b - Math.sqrt(delta)) / (2 * a);
                let result = [root1, root2];
                return result;
            }
            catch (e) {
                console.log(e);
            }
        }
    },
    /**
     * factor
     */
    exports = {
        Factorial=(f) => {

            try {
                for (let factor = 2; factor * factor <= n; factor++) {
                    while (n % factor == 0) {
                        console.log(factor + " ");
                        n = n / factor;
                    }
                }
                if (n > 1)
                    console.log(n);
                else
                    console.log();
            }
            catch (e) {
                console.log(e);
            }
        }
    },
    /**
     * distance
     */
    exports =
    {
        Dist=() => {
            try {
                let distance = Math.sqrt(x * x + y * y);
            }
            catch (e) {
                console.log(e)
            }

        }
    },
    /**
     * Power
     */
    exports = {
        Powerof=(n) => {
            try {
                let i = 0;
                let power = 1;
                while (i <= n)
                    power = power * 2;
                i++;
            }
            catch (e) {
                console.log(e);
            }
        }
    },
    /**
     * Harmonic
     */
    exports = {
        Har=(n) => {
            let h = 1;
            for (let i = 2; i <= n; i++) {
                h = h + 1 / i;
            }
            return h;
        }

    },
    /**
     * CoinFlip
     */
    exports = {
        Flip=(choice) => {
            try {
                let head_count = 0; tail_count = 0;
                let head, tail;
                for (let j = 0; j < choice; j++) {
                    if (Math.random() < 0.5) {
                        tail_count++;
                    }
                    else {

                        head_count++;
                    }
                }
                head = head_count / choice * 100;
                tail = tail_count / choice * 100;
            }
            catch(e) {
            console.log(e);
        }
    }

    },
/**
 * 
 */
exports = {
    sumOfThreeNum= (n, arr) => {
        let sum = 0;
        let count = 0;
        let arr2 = [];
        for (let i = 0; i < n - 2; i++) {
            for (let j = i + 1; j < n - 1; j++) {
                for (let k = j + 1; k < n; k++) {
                    sum += arr[i] + arr[j] + arr[k];
                    if (sum == 0) {
                        arr2[count] = [];
                        arr2[count].push(arr[i]);
                        arr2[count].push(arr[j]);
                        arr2[count].push(arr[k]);
                        count++;
                    }
                    sum = 0;
                }
            }
        }
        console.log("Number of Triplets " + count);
        return arr2;
    }
},
/**
 * MonthlyPayment
 */
Payment=()=>
{
    payment=(p*r)/(1 - Math.pow(1+r, -n))
}