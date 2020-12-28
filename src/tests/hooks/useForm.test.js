import { act, renderHook } from "@testing-library/react-hooks"
import { useForm } from "../../hooks/useForm"


describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'ronaldo',
        email: 'r@gmail.com'
    }

    test('should regresar un formulario por defecto', () => {

        const { result } = renderHook(() => useForm(initialForm));

        const [values, handleInputChange, reset] = result.current;

        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');

    })
    test('should cambiar el valor del formulario (cambiar name)', () => {
        
        const { result } = renderHook(() => useForm(initialForm));

        const [ values, handleInputChange] = result.current;

        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Alberto'
                }
            });
        })

        const [formValues] = result.current;

        expect( formValues ).toEqual( {...initialForm, name:'Alberto'} );

    })

    test('should reestablecer el formulario con el reset', () => {
        
        const { result } = renderHook(() => useForm(initialForm));

        const [ , handleInputChange, reset] = result.current;

        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Alberto'
                }
            });
        });

        act( () => {
            reset();
        } )

        const [formValues] = result.current;

        expect( formValues ).toEqual( initialForm );

    })

})
