describe('Pruebas en <DemoCopmponent />', () => {

    test('should first', () => {
        //Inicializacion
        const message1 = 'Hola mundo';
        //Estimulo
        const message2 = message1.trim();
        //Observar el comportamiento esperado
        expect(message1).toBe(message2);
    });
});