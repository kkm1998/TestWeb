import {Field} from './Field'
import {FieldType} from './FieldType'
export class TextAreaField implements Field {
    name: string;
    label: string;
    type!: FieldType
    element: HTMLTextAreaElement;
    constructor(name: string, label: string, type: FieldType) {
        this.element = <HTMLTextAreaElement>document.createElement('textarea');
        this.name = name;
        this.label = label;
        this.type = type
        this.element.name = this.name;
        this.element.id = this.name;
        this.element.placeholder=this.label
        this.element.setAttribute('type',<string>this.type)
    }
    render(): HTMLElement {
        return this.element;
    }
    getValue(): any {
        return this.element.value
    }
}
