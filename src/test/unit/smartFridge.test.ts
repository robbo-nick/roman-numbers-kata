import {SmartFridge} from "../../main/smartFridge";

describe('SmartFridge', () => {
    it('should allow setting the current date', ()=>{
        const smartFridge = new SmartFridge();
        let expectedDate = new Date("2022-01-03");

        smartFridge.setCurrentDate(expectedDate);

        const actualDate = smartFridge.getCurrentDate();
        expect(actualDate).toEqual(expectedDate);
    })
})