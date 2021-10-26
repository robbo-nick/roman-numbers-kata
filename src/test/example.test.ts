import { romanNumber } from "../main/example";

describe('roman numbers test', () => {
    it.each(
        [
            ['' , 0],
            ['I', 1],
            ['II', 2],
            ['III', 3],
            ['IV', 4],
            ['V', 5],
            ['VI', 6],
            ['VII', 7],
            ['VIII', 8],
            ['IX', 9],
            ['X', 10],
            ['XI', 11],
            ['XII', 12],
            ['XIII', 13],
            ['XIV', 14],
            ['XV', 15],
            ['XVI', 16],
            ['XVII', 17],
            ['XVIII', 18],
            ['XIX', 19],
            ['XX', 20],
            ['XXXIX', 39],
            ['XL', 40],
            ['L', 50],
            ['LI', 51]
        ]
    )   ("should return %s string when given %i", (roman : string, arabic : number) => {
        expect(romanNumber(arabic)).toEqual(roman);
    })
})

