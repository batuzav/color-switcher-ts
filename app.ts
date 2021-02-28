const hexValues: string[] = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9", 
    "A", "B", "C", "D", "E", "F"]


const btn = document.getElementById("btn")!;

const color = document.querySelector(".color")!;


const generatedColor = (update:(color: string) => void) => {
    let hexColor: string = "#"
    
    for(let i=0; i < 6; i++) {
        const index = getRandomNumber(hexValues.length);
        hexColor += hexValues[index];
    }
    update(hexColor);
    
}

const updateUI = (hexColor: string) => {
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
}

btn?.addEventListener("click", ()=> {
    generatedColor(updateUI)
    
});

const getRandomNumber = (length: number) => {
    return Math.floor(Math.random() * length);
}