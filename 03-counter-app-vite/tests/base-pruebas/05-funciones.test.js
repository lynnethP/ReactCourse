import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-Funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser()
        expect(testUser).toEqual(user);
    })

    test('getUsuarioActivo debe retornar un objeto', () => {
        const name = 'Naty'
        const user = getUsuarioActivo(name)
        const object = {
            uid: 'ABC567',
            username: name
        }
        expect(user).toEqual(object)
    })
})