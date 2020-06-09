import { Field } from './Field'
import { FieldType } from './FieldType'
export class SelectField implements Field {
    name: string;
    label: string;
    type!: FieldType
    element: HTMLSelectElement;
    constructor(name: string, label: string, type: FieldType, options: Array<string>) {

        this.element = <HTMLSelectElement>document.createElement('select');
        this.name = name;
        this.label = label;
        this.type = type
        this.element.name = this.name;
        this.element.id = this.name;
        this.element.setAttribute('type', <string>this.type)
        const PlaceHolder: HTMLOptionElement = document.createElement('option')
        PlaceHolder.setAttribute('hidden', 'hidden')
        let PlaceHolder_text: Text = document.createTextNode(label)
        PlaceHolder.appendChild(PlaceHolder_text)
        this.element.appendChild(PlaceHolder)
        if (options[0] == 'Kraje') {

            this.fetchOptions<{ name: string, region: string }>("https://restcountries.eu/rest/v2/all").then((data) => {
                // data.forEach(element => {
                //     if (element.region == options[1]) {
                //         let option = <HTMLOptionElement>document.createElement("option");
                //         option.text = element.name;
                //         option.value = element.name;
                //         this.element.options.add(option);
                //     }
                // });
                data.filter(x => x.region == options[1]).map(x => x.name).forEach(element => {
                    let option = <HTMLOptionElement>document.createElement("option");
                    option.text = element;
                    option.value = element;
                    this.element.options.add(option);
                })
            });
        }
        // else if (options[0] == 'Kontynenty') {
        //     let x: string[] = []
        //     this.fetchOptions<{ name: string, region: string }>("https://restcountries.eu/rest/v2/all").then((data) => {
        //         data.forEach(element => {
        //             x.push(element.region)
        //         });
        //         const uniqueArray = x.filter(function(item, pos) {
        //             return x.indexOf(item) == pos;
        //         })
        //         uniqueArray.forEach(e=>{
        //             let option = <HTMLOptionElement>document.createElement("option");
        //             option.text = e;
        //             option.value = e;
        //             this.element.options.add(option);
        //         })

        //     });
        // }
        else {
            options.forEach(x => {
                const option: HTMLOptionElement = document.createElement('option')
                let option2: Text = document.createTextNode(x)
                option.appendChild(option2)
                this.element.appendChild(option)
            })
        }

    }
    render(): HTMLElement {
        return this.element;
    }
    getValue(): any {
        return this.element.value
    }
    fetchOptions<T>(url: string): Promise<T[]> {
        return fetch(url)
            .then(res => res.json())
            .then(res => {
                return res;
            })
            .catch((e) => {
                console.log("API errore fetching ");
            });
    }
}