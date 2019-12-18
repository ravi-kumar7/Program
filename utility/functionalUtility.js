/**
 * To check a given year is leap year or not.
 */
exports.leapYear = (year) => {
    /**
 * To check a given year is leap year or not.
 * return the resukt
 */
    if (year.length != 4) {
        console.log("enter 4 digit no.");
    }
    else if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
        console.log(year, "is leap year");
    }
    else {
        console.log(year, "is not a leap year");
    }
    

},

    /**
     * prints the day of the week that date falls on
     */
    exports.dayOf = (m, d, y) => {
        /**
         * Taking a date as input 
         * prints the day of the week that date falls on
         * return the result
         */
        let y0 = y - (14 - m) / 12;
        let x = y0 + y0 / 4 - y0 / 100 + y0 / 400;
        let m0 = m + 12 * ((14 - m) / 12) - 2;
        let d0 = (d + x + (31 * m0) / 12) % 7;
    },

    /**
     * Program to print the wind chill
     */
    exports.windChill = (t, v) => {
        /**
         * Takes two arguments t and v
         * temperature t (in Fahrenheit)
         * wind speed v (in miles per hour)
         * return w
         */
        try {


            if ((t > 50) || (v > 120 || v < 3)) {
                console.log("error");
            }
            else {
                let w = 35.74 + 0.6215 * t + (0.4275 * t - 35.75) * Math.pow(v, 0.16);
                return w;
            }
        }
        catch (e) {
            console.log(e);
        }

    },
    /**
     * Program to find Quadratic equation
     */
    exports.quadratic = (a, b, c) => {
        /**
         * a-value of variable a
         * b-value of variable b
         * c-value of variable c
         * find the root1,root2  values
         * return the result
         */
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
     */
    exports.factorial = (N) => {
        /**
         * Computes the prime factorization of N
         * return the value
         */
        try {
            for (let factor = 2; factor * factor <= N; factor++) {
                while (N % factor == 0) {
                    console.log(factor + " ");
                    N = N / factor;
                }
            }
            if (N > 1)
                console.log(N);
            else
                console.log();
        }
        catch (e) {
            console.log(e);
        }
        
    },
    /**
     *  program to print the Euclidean distance from the point (x, y) to the origin (0, 0).
     * x-value of x
     * y-value of y
     * return distance
     */
    exports.dist = (x, y) => {
        /**
         * Find Euclidean distance
         */
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
     */
    exports.powerof = (n) => {
        /**
         * table of the powers of 2 that are less than or equal to 2^N.
         * return result
         */
        try {
            let i = 0;
            let power = 1;
            console.log("power of 2^" + n);
            while (i <= n) {
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
     */

    exports.har = (n) => {
        /**
         * Harmonic Value N
         * Print the Nth Harmonic Value
         */
        let h = 1;
        for (let i = 2; i <= n; i++) {
            h = h + 1 / i;
        }
        return h;

    },
    /**
     * Program to Flip Coin and print percentage of Heads and Tails
     */
    exports.flip = (choice) => {
        /**
         * number of times to Flip Coin
         * Use Random Function to get value between 0 and 1
         * Print Percentage of Head vs Tails
         */
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
     */
    exports.sumOfThreeNum = (arr,n) => {
        /**
         *  taking i,j,k values as input.
         *  Find distinct triples
         * return result
         */
        {
            let found = true;
            for (let i = 0; i < n - 2; i++) {
                for (let j = i + 1; j < n - 1; j++) {
                    for (let k = j + 1; k < n; k++) {
                        if (arr[i] + arr[j] + arr[k] == 0) {
                            console.log(arr[i]+ " "+ arr[j]+ " "+ arr[k]);
                            found = true;
                        }
                    }
                }
            }

            // If no triplet with 0 sum found in array 
            if (found == false)
                System.out.println(" not exist ");

        }


    },
    /**
     * Program to  calculate monthly Payment
     */
    exports.payments = (principal, year,Rate) => {
        /**
         * taking value  of Principal,Rate,Year
         * calculate the payment
         */
        let r = Rate / (12 * 100);
        let n = 12 * year;
        let payment = (principal * r) / (1 - Math.pow(1 + r, -n))
        return payment;
        
    },
    /**
     *Replace String 
     */
    exports.strngs = (b, c) => {
        let d = b.replace(c, b);
        console.log("hello " + d + "..how r u?");
    }
