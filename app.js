// Exercise 1 Section
for (let i = 1; i <= 100; i++)
    {
        if (i % 2 !== 0)
            {
                console.log(i);
            }
    }

// Exercise 2 Section
for (let i = 1; i <= 100; i++)
    {
        if (i % 3 == 0 && i % 5 == 0)
            {
                console.log(i, "FIZZBUZZ");
            }

        else if (i % 3 == 0)
                 {
                     console.log(i, "FIZZ");
                 }

        else if (i % 5 == 0)
                 {
                     console.log(i, "BUZZ");
                 }
    }

// Exercise 3 Section = "Exercise 1"
let i = 1;

while (i <= 100)
    {
        console.log(i);
        i += 2;
    }

// Exercise 3 Section = "Exercise 2"
i = 1;

do 
{
    if (i % 3 == 0 && i % 5 == 0) 
    {
        console.log(i, "FIZZBUZZ");
    } 
    else if (i % 3 == 0)
    {
        console.log(i, "FIZZ");
    } 
    else if (i % 5 == 0) 
    {
        console.log(i, "BUZZ");
    }
    i++;
} while (i <= 100);

// Exercise 4 Section
let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);

let found = false;

for (i = 0; i <= n; i++)
    {
        if (i == value)
            {
                console.log("Found value!")
                found = true;
                break;
            }
    }

if (!found)
    {
        console.log("Did not find value")
    }

//Exercise 5 Section
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 100) + 100);

for (i = start; i <= end; i++)
    {
        if (i % fizzDivisor == 0 && i % buzzDivisor == 0)
            {
                console.log(i, "FIZZBUZZ");
            }

        else if (i % fizzDivisor == 0)
                 {
                     console.log(i, "FIZZ");
                 }

        else if (i % buzzDivisor == 0)
                 {
                     console.log(i, "BUZZ");
                 }
    }