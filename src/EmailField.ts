import {Field} from './Field'
import {FieldType} from './FieldType'
export class EmailField implements Field {
    name: string;
    label: string;
    type!: FieldType
    element: HTMLInputElement;
    constructor(name: string, label: string, type: FieldType) {
        this.element = <HTMLInputElement>document.createElement('input');
        this.name = name;
        this.label = label;
        this.type = type
        this.element.name = this.name;
        this.element.id = this.name;
        this.element.type=this.type
        this.element.placeholder=this.label
    }
    render(): HTMLElement {
        return this.element;
    }
    getValue(): any {
        return this.element.value
    }
}
