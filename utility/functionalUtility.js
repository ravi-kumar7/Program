/**
 * To check a given year is leap year or not.
 * @param Taking the value of year from user.
 * @return return result.
 */
exports.leapYear = (year) => {
    try{
    if (year.length != 4) {
        console.log("enter 4 digit no.");
    }
    else if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
        console.log(year, "is leap year");
    }
    else {
        console.log(year, "is not a leap year");
    }
}
catch(err)
{
    console.log(err);
}

},
    /**
     * prints the day of the week that date falls on
     * @param Taking a month as input
     * @param Taking a day as input
     * @param Taking a year as input
     * @return return the result
     */
    exports.dayOfWeek = (month, day, year) => {
        let y0 = year - (14 - month) / 12;
        let x = y0 + y0 / 4 - y0 / 100 + y0 / 400;
        let m0 = month + 12 * ((14 - month) / 12) - 2;
        let d0 = (day + x + (31 * m0) / 12) % 7;
        return d0;
    },

    /**
     * Program to print the wind chill
     * @param Takes two arguments temperature and windSpeed
     * @param temperature temperature (in Fahrenheit)
     * @param wind speed windSpeed(in miles per hour)
     * @return return w
     */
    exports.windChill = (temperature, windSpeed) => {
        try {
            if ((temperature > 50) || (windSpeed > 120 || windSpeed < 3)) {
                console.log("error");
            }
            else {
                let w = 35.74 + 0.6215 * temperature + (0.4275 * temperature - 35.75) * Math.pow(windSpeed, 0.16);
                return w;
            }
        }
        catch (e) {
            console.log(e);
        }

    },
    /**
     * Program to find Quadratic equation
     * @param a-value of variable a
     * @param b-value of variable b
     * @param c-value of variable c
     * @param find the root1,root2  values
     * @return return the result
     */
    exports.quadratic = (a, b, c) => {
        try {
            let root1 = 0, root2 = 0;
            let delta = Math.sqrt((b * b) - (4 * a * c));
            root1 = (-b + Math.sqrt(delta)) / (2 * a);
            root2 = (-b - Math.sqrt(delta)) / (2 * a);
            let result = [root1, root2];
            return result;
        }
        catch (e) {
            console.log(e);
        }

    },
    /**
     *  program to find prime factorization
     * @param Taking value of num from user.
     * @return return the value.
     */
    exports.factorial = (num) => {
        try {
            for (let factor = 2; factor * factor <= num; factor++) {
                while (num % factor == 0) {
                    console.log(factor + " ");
                    num = num / factor;
                }
            }
            if (num > 1)
                console.log(num);
            else
                console.log();
        }
        catch (e) {
            console.log(e);
        }

    },
    /**
     *  program to print the Euclidean distance from the point (x, y) to the origin (0, 0).
     * @param x-value of x
     * @param y-value of y
     * @return return distance
     */
    exports.dist = (x, y) => {
        try {
            let distance = Math.sqrt(x * x + y * y);
            return distance;
        }
        catch (e) {
            console.log(e)
        }


    },
    /**
     * Program to print a table of the powers of 2
     * @param taking the value of num from user.
     * @return return the result.
     */
    exports.powerof = (num) => {
        try {
            let i = 0;
            let power = 1;
            console.log("power of 2^" + num);
            while (i <= num) {
                console.log("2^ " + i + "=" + power);
                power = power * 2;
                i++;

            }
        }
        catch (e) {
            console.log(e);
        }
    },
    /**
     * To print Nth harmonic number
     * @param taking value from user
     * @return Print the Nth Harmonic Value
     */

    exports.harmonic = (value) => {
        let h = 1;
        for (let i = 2; i <= value; i++) {
            h = h + 1 / i;
        }
        return h;

    },
    /**
     * Program to Flip Coin and print percentage of Heads and Tails
     * @param taking value from user number of times to Flip Coin
     * Use Random Function to get value between 0 and 1
     * @return Print Percentage of Head vs Tails
     */
    exports.flipCoin = (choice) => {
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
            console.log("percentage of head " + head + "%");
            console.log("percentage of tail " + tail + "%");
        }
        catch (e) {
            console.log(e);
        }



    },
    /**
     * Sum of three Integer adds to zero
     *@param taking i,j,k values as input.
     * Find distinct triples
     * @return return result.
     */
    exports.sumOfThreeNum = (arr, n) => {
        {
            let found = true;
            for (let i = 0; i < n - 2; i++) {
                for (let j = i + 1; j < n - 1; j++) {
                    for (let k = j + 1; k < n; k++) {
                        if (arr[i] + arr[j] + arr[k] == 0) {
                            console.log(arr[i] + " " + arr[j] + " " + arr[k]);
                            found = true;
                        }
                    }
                }
            }

            // If no triplet with 0 sum found in array 
            if (found == false)
                console.log(" not exist ");

        }


    },
    /**
     * Program to  calculate monthly Payment
     * @param taking value  of Principal,Rate,Year
     * @return calculate the payment.
     */
    exports.payments = (principal, year, Rate) => {
        let r = Rate / (12 * 100);
        let n = 12 * year;
        let payment = (principal * r) / (1 - Math.pow(1 + r, -n))
        return payment;

    },
    /**
     *Replace String 
     *@param Taking value for b and c
     *@return replacing values.
     */
    exports.strngs = (b, c) => {
        let d = b.replace(c, b);
        let output = ("hello " + d + "..how r u?");
        return output;
    }
