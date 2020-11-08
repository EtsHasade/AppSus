'use strict';
import {eventBus} from '../../../services/eventBus-service.js'


export default {
    name: 'noteToDo',
    props: ['note'],
    template:`
        <section class="note-todo">
            <h2 class="note-title" contenteditable="true" :innerText="info.label">{{info.label}}</h2>
            <div class="todos-container"  style="align-items: flex-start">
                <div class="todo-line" v-for="(todo, idx) in info.todos" :key="idx" :class="{done: note.info.todos[idx].isDone}" :ref="idx">
                    <div @click="deleteTodo(idx)"><i class="far fa-trash-alt"></i></div>
                    <div @click="clickTodo(idx)"  v-if="!note.info.todos[idx].isDone"><i class="far fa-square"></i></div>
                    <div @click="clickTodo(idx)" v-if="note.info.todos[idx].isDone"><i class="fas fa-check-square"></i></div>
                    <div class="todo-txt" contenteditable="true" name="txt" @blur="onSaveTxt(idx, 'txt')" >{{todo.txt}}</div>
                    <!-- <div class="todo-txt" contenteditable="true" name="doneAt" @blur="onSaveTxt(idx, 'doneAt')" >{{todo.doneAt}}</div> -->
                </div>
                <div class="add-todo">
                    <button class="add" @click="addTodo"><i class="far fa-plus-square"></i></button>
                </div>
            </div>
        </section>
    `,
        data(){
            return{
                info: null
            }
        },
    created(){
        this.info = this.note.info
        console.log('info.todos', this.info.todos);

        
    },
    methods:{
        clickTodo(idx){
            this.note.info.todos[idx].isDone = !this.note.info.todos[idx].isDone;
            console.log('click todo',idx,this.note.info.todos[idx].isDone);
            this.emitSaveNoteChanges();
        },
        emitSaveNoteChanges(){
            console.log('todo: this.note', this.note);
            eventBus.$emit('saveNote', this.note)
        },
        onSaveTxt(todoIdx, fildName){
            const elTodo = this.$refs[todoIdx][0];
            this.note.info.todos[todoIdx][fildName] = elTodo.querySelector(`[name=${fildName}]`).innerText;
            
            console.log('elTodo',elTodo, this.$refs[todoIdx][0]);     
            this.emitSaveNoteChanges()     
        },
        addTodo(){
            this.note.info.todos.push({ txt: "Do that", isDone: false, doneAt: null })
            this.emitSaveNoteChanges() 
        },
        deleteTodo(idx){
            this.note.info.todos.splice(idx,1);
            this.emitSaveNoteChanges() ;
            
        }
    }
}

