import { StringMappingType } from "typescript"


export class Todo {
    id!: number;
    name: string;
    isCompleted: boolean;

    constructor({ name, isCompleted = false }: { name: string; isCompleted?: boolean; }) {

        this.name = name;
        this.isCompleted = isCompleted;
    }
}