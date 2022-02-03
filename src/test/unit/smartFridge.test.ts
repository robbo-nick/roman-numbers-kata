import {SmartFridge} from "../../main/smartFridge";

describe('SmartFridge', () => {
    it('should allow setting the current date', ()=>{
        const smartFridge = new SmartFridge();
        let expectedDate = new Date("2022-01-03");

        smartFridge.setCurrentDate(expectedDate);

        const actualDate = smartFridge.getCurrentDate();
        expect(actualDate).toEqual(expectedDate);
    }),

    it('should allow opening the door', ()=>{
        const smartFridge = new SmartFridge();
        smartFridge.signalDoorOpened();

        const doorIsOpen = smartFridge.getDoorIsOpen();
        expect(doorIsOpen).toEqual(true);
    }), 

    it('should allow closing the door', ()=>{
        const smartFridge = new SmartFridge();
        smartFridge.signalDoorOpened();
        smartFridge.signalDoorClosed();

        const doorIsOpen = smartFridge.getDoorIsOpen();
        expect(doorIsOpen).toEqual(false);
    }),

    it('should allow the scanning of an item', ()=>{
        const smartFridge = new SmartFridge();
        smartFridge.scanAddedItem("Milk", "2022-01-03", "sealed");
        
        const expectedOutput = "Milk: 0 days remaining";
        const actualOutput = smartFridge.showDisplay;
        expect(expectedOutput).toEqual(actualOutput);
    })
})