import React from "react";
import { shallow, mount } from "enzyme";
import ProviderMock from "../../__mocks__/ProviderMock.js";
import { create } from "react-test-renderer";
import Header from "../../components/Header";

describe('<Header />', () => {

    // De esta forma se busca un elemento con el método shallow
    const header = shallow(
        <ProviderMock>
            <Header />
        </ProviderMock>,
    );
    
    // De esta forma se evalúa si un componente se está renderizando
    test('Renderiza el componente Header', () => {
        expect(header.length).toEqual(1);
    });

    // Está fallando y sabrá el putas por qué
    test('Render del título', () => {
        
        const headerMount = mount(
        <ProviderMock>
            <Header />
        </ProviderMock>,
        );

        expect(headerMount.find(".Header-title").text()).toEqual("Platzi Store");
    });

})

describe('Header Snapshot', () => {

    test('Comprobar el snapshot del Header', () => {
        const header = create(
        <ProviderMock >
            <Header />
        </ProviderMock>);

        expect(header.toJSON()).toMatchSnapshot();
    });
});