import { Component } from '@angular/core';

@Component({
  selector: 'app-todomanager',
  templateUrl: './todomanager.component.html',
  styleUrl: './todomanager.component.css'
})
export class TodomanagerComponent {

    todoList: any  = [];

    inputTodo: string = "";

    addTodolist(todoValue: any) { 

        this.todoList.push(todoValue);
        this.inputTodo = "";
   
    }

    removeTodolist(id : number) { 

        this.todoList.splice(id, 1);

    }


}
