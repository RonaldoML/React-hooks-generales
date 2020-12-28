import { shallow } from "enzyme";
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";

describe('Pruebas de RealExampleRef', () => {
    
    test('should mostrarse correctamente', () => {
        
        const wrapper = shallow( <RealExampleRef/> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(false);

    })
    
    test('should mostrar el componente MultipleCustomHook', () => {
        
        const wrapper = shallow( <RealExampleRef/> );

        wrapper.find('button').props().onClick();
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(true);

    })
    

})
