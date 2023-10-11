import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08', () => {
    test('Debe retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    })

    test('getHeroeById debe retornar undefined si no existe', () => {
        const id = 100;
        const hero = getHeroeById(id);
        expect(hero).toBeFalsy();
    })


    //Tarea
    //Debe retornar un arreglo con los heroes de DC
    //length === 3
    //toEqual al arreglo filtrado

    test('Debe retornar un arreglo con los heroes de DC', () => {
        const owner = getHeroesByOwner('DC')
        expect(owner.length).toBe(3)
        expect(owner).toEqual([{
            id: 1,
            name: 'Batman',
            owner: 'DC'
        },
        {
            id: 3,
            name: 'Superman',
            owner: 'DC'
        },
        {
            id: 4,
            name: 'Flash',
            owner: 'DC'
        }])
    })

    //debe retornar un arreglo con los heroes de Marvel
    //length === 2

    test('Debe retornar un arreglo con los heroes de Marvel', () => {
        const owner = 'Marvel'
        const heroes = getHeroesByOwner(owner)
        expect(heroes.length).toBe(2)
        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))
    })
})