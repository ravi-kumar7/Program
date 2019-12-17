/**
 * To check a given year is leap year or not.
 */
module.exports = {
    /**
     * To check a given year is leap year or not.
     * return the resukt
     */
    leapYear=(year) => {
        if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
            return true;
        }
        else {
            return false;
        }
    }
},

    /**
     * Program to print the wind chill
     */
    windChill = (t, v) => {
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
        quadratic = (a, b, c) => {
            /**
             * a-value of variable a
             * b-value of variable b
             * c-value of variable c
             * find the root1,root2  values
             * return the result
             */
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

        },
            /**
             *  program to find prime factorization
             */
            factorial = (f) => {
                /**
                 * Computes the prime factorization of N
                 * return the value
                 */
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
            },
            /**
             *  program to print the Euclidean distance from the point (x, y) to the origin (0, 0).
             * x-value of x
             * y-value of y
             * return distance
             */
            dist = () => {
                /**
                 * Find Euclidean distance
                 */
                try {
                    let distance = Math.sqrt(x * x + y * y);
                }
                catch (e) {
                    console.log(e)
                }


            },
            /**
             * Program to print a table of the powers of 2
             */
            powerof = (n) => {
                /**
                 * table of the powers of 2 that are less than or equal to 2^N.
                 * return result
                 */
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
            },
            /**
             * To print Nth harmonic number
             */

            har = (n) => {
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
            flip = (choice) => {
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
                }
                catch (e) {
                    console.log(e);
                }


            },
            /**
             * Sum of three Integer adds to zero
             */
            sumOfThreeNum = (n, arr) => {
                /**
                 *  taking i,j,k values as input.
                 *  Find distinct triples
                 * return result
                 */
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

            },
            /**
             * Program to  calculate monthly Payment
             */
            payment = () => {
                /**
                 * taking value  of Principal,Rate,Year
                 * calculate the payment
                 */
                let r = Rate / (12 * 100);
                let n = 12 * y;
                payment = (principal * r) / (1 - Math.pow(1 + r, -n))
            }