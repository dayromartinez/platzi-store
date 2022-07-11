import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe("Pruebas Footer", () => {

    const footer = mount(<Footer />);

    test('Renderiza el componenten Footer', () => {
        // Con el método mount se busca al componente Footer dentro del DOM de la página
        expect(footer.length).toEqual(1);
    });

    test('Render del título', () => {
        // El método .find() busca un elemento en el componente por su className o id
        // El método .text() devuelve el texto del elemento html, si llegase a tener
        expect(footer.find(".Footer-title").text()).toEqual("Platzi Store")
    })

});

describe('Footer Snapshot', () => {

    test('Comprobar la UI del componente Footer', () => {
        const footer = create(<Footer />);
        //Se convierte el componente a un objeto .json y luego se crea el snapshot con el comando .toMatchSnapshot() y ese mismo comando compara los objetos .json
        expect(footer.toJSON()).toMatchSnapshot();
    });
});