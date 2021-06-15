class Pen {
    color = "#61ff3b";
    ink = 100;
    
    Write(string)
    {
        let text = "";
        for (const char of string) {
            if(char !== " ") 
                this.ink -= 0.5;
            if(this.ink < 0) break;
            text += char;
        }
        console.log(text);
    }
}

class RefillablePen extends Pen{
    Refill(){
        this.ink = 100;
    }
}

let pen = new Pen();
let str = "";
for (let i = 0; i < 99; i++) {
    str += i + " ";
}
console.log("Normal pen:");
console.log("N1:");
pen.Write(str);
console.log("N2:");
pen.Write(str);
console.log("N3:");

pen = new RefillablePen();
pen.color = "#ad0000";


console.log("RefillablePen pen:");
console.log("N1:");
pen.Write(str);
console.log("N2:");
pen.Write(str);
console.log("N3:");
pen.Write(str);
console.log("Refill");
pen.Refill();
console.log("N4:");
pen.Write(str);
console.log("N5:");
pen.Write(str);
