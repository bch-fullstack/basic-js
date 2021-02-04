const WHEEL_COUNT = 5;

let counter = 0;

while(counter < WHEEL_COUNT) {
    const newWheel = document.createElement('div');
    newWheel.className = `wheel wheel-${counter}`;
    document.getElementById('wheels').append(newWheel);
    counter++;
}

