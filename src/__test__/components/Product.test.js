import React from "react";
import { mount, shallow } from "enzyme";
import ProviderMock from "../../__mocks__/ProviderMock.js";
import Product from "../../components/Product";
import ProductMock from "../../__mocks__/ProductMock.js";

describe('<Product />', () => {

    test('Render del componente Product', () => {
        const product = shallow(
            <ProviderMock>
                <Product />
            </ProviderMock>
        )

        expect(product.length).toEqual(1);
    })

    test('Comprobar el botón de comprar', () => {

        // El método jest.fn() sirve para hacer un mock de una función, para así no tener la necesidad de importarla
        const adicionarAlCarrito = jest.fn();

        const wrapper = mount(
            <ProviderMock>
                <Product 
                    product={ProductMock}
                    handleAddToCart={adicionarAlCarrito}
                />
            </ProviderMock>
        )

        wrapper.find('button').simulate('click');
        expect(adicionarAlCarrito).toHaveBeenCalledTimes(1);
    })
})