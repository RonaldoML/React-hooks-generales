import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";

jest.mock('../../../hooks/useFetch');
// jest.mock('../../../hooks/useCounter')

describe('Prueba en MultipleCustomHooks', () => {

    // useCounter.mockReturnValue({
    //     counter:1,
    //     increment: ()=> {}
    // })

    test('should mostrarse correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks/> );

        expect( wrapper ).toMatchSnapshot();

    });

    test('should mostrar la información', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Ronaldo',
                quote: 'Hola mundo'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks/> );

        expect( wrapper.find('.alert').exists() ).toBe(false);
        expect( wrapper.find('.mb-0').text().trim() ).toBe('Hola mundo');
        expect( wrapper.find('footer').text().trim() ).toBe('Ronaldo');

        expect( wrapper ).toMatchSnapshot();
        
        

    })
    


})

