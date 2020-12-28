import { shallow } from "enzyme";
import { HookApp } from "../HookApp";



describe('Prueba a HookApp component', () => {
    
    test('should mostrar el componente correctamente', () => {
        
        const wrapper = shallow(<HookApp/>);

        expect(wrapper).toMatchSnapshot();

    })
    

})
