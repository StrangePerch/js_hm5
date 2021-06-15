class Employee {
    name;
    surname;
    age;
    salary;
    constructor(name,surname,age,salary){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.salary = salary;
    }
}

class EmpTable{
    employers;
    constructor(employers) {
        this.employers = employers;
    }
    
    getHtml(caption = 'Employers')
    {
        let html = 
            `<table>\n` +
            ` <caption>${caption}</caption>\n` +
            `<tr>\n` +
            `  <th>Name</th>\n` +
            `  <th>Surname</th>\n` +
            `  <th>Age</th>\n` +
            `  <th>Salary</th>\n` +
            `</tr>\n`;
        for (const employee of this.employers) {
            html +=
                `<tr>` +
                `   <td>${employee.name}</td>` +
                `   <td>${employee.surname}</td>` +
                `   <td>${employee.age}</td>` +
                `   <td>${employee.salary}</td>` +
                `</tr>\n`;
        }
        html += `</table>\n`;
        return html;
    }
    
    getHtmlText()
    {
        let html = this.getHtml();
        html = html.replaceAll(">", "&gt");
        html = html.replaceAll("<", "&lt");
        html = html.replaceAll("\n", "</br>");
        return html;
    }

    getCssText()
    {
        let css = this.getCss();
        css = css.replaceAll("}", "}</br>");
        css = css.replaceAll("{", "{</br>");
        css = css.replaceAll(";", ";</br>");
        return css;
    }
    
    getCss(width = 300, border_color = "black")
    {
        return `        table {\n` +
            `            width: ${width}px;\n` +
            `            border-collapse: collapse;\n` +
            `            border: 2px solid ${border_color};\n` +
            `        }\n` +
            `        td, th {\n` +
            `            padding: 3px;\n` +
            `            border: 1px solid ${border_color};\n` +
            `            text-align: left;\n` +
            `        }\n`;
    }
}

class StyledEmpTable extends EmpTable{
    getHtml() {
        let html = 
            `<style>\n` +
            `${table.getCss()}\n` +
            `</style>`;
        html += super.getHtml();
        return html;
    }
}

let employers = 
    [   new Employee("Vasya", "Pupkin", 32, 3000),
        new Employee("Vanya", "Gonchar", 20, 2500),
        new Employee("Sasha", "Kucher", 1, 2300),
        new Employee("Olya", "Vladimirovna", 22, 5000),
        new Employee("Oksana", "Shevchenko", 76, 6000),
        new Employee("Vladimir", "Putin", 18, 5),];

let table = new EmpTable(employers);
let styledTable = new StyledEmpTable(employers);

document.body.innerHTML += styledTable.getHtml();

document.querySelector('#output').innerHTML =
    `</br><h2>Html:</h2></br>`+
    `${table.getHtmlText()}` +
    `</br><h2>Style:</h2></br>`+
    `${table.getCssText()}` +
    `</br><h2>StyledHtml:</h2></br>`+
    `${styledTable.getHtmlText()}`;