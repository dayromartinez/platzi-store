import { getData } from "../../utils/getData";


describe('Fetch Api', () => {

    beforeEach(() => {
        fetch.resetMocks();
    });

    test('LLamar a una API y retornar datos', () => {

        fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

        getData('https://api.platzi.com/mock')
        .then((response) => {
            expect(response.data).toEqual('12345');
        });

        //De esta forma se evalúa si se llama a la API en la dirección web indicada
        expect(fetch.mock.calls[0][0]).toEqual('https://api.platzi.com/mock');
    });
});