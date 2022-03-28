var college = {universityName: ((2938 * Math.random()) * Math.random()), 
    location: ((445 * Math.random()) * Math.random()), 
    totalPupils: ((39582 * Math.random()) * Math.random()), 
    feeTuition: ((3456 * Math.random()) * Math.random()), 
    cantines: ((923 * Math.random()) * Math.random()), 
    director: ((287 * Math.random()) * Math.random())};

    for (let everyDamnProperty in college)
        {
            document.write("  The property name of this value is: <strong>"+everyDamnProperty+"</strong>" 
            + 
            "<hr> The inner value is " 
            + 
            "<strong>" 
            + 
            college[everyDamnProperty] 
            + 
            "</strong><hr>")
        }