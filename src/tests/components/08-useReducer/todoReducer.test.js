import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos";

describe('Prueba con el todoReducer', () => {

    test('should retornar el estado por defecto', () => {

        const state = todoReducer(demoTodos, {});

        expect(state).toEqual(demoTodos);

    });

    test('should debe agregar un TODO', () => {

        const newTodo = { id: 3, desc: 'Aprender Node', done: false };

        const action = { type: 'add', payload: newTodo };

        const state = todoReducer(demoTodos, action);

        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, newTodo]);

    });

    test('should borrar un todo', () => {
        const newTodo = { id: 3, desc: 'Aprender Node', done: false };

        let action = { type: 'add', payload: newTodo };

        let state = todoReducer(demoTodos, action);

        console.log(state);

        action = { type: 'delete', payload: newTodo };

        state = todoReducer(demoTodos, action);

        expect(state.length).toBe(2);
        expect(state).toEqual([...demoTodos]);
    });

    test('should hacer el toggle del TODO', () => {
        
        const action = { type: 'toggle', payload: 2};

        const state = todoReducer(demoTodos, action);

        expect( state[1].done ).toBe(true);

    });
    


});
