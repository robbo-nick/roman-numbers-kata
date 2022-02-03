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
    })

    it('should display the item and number of days remaining for expiry when the item is not expired', ()=>{
        const smartFridge = new SmartFridge();
        smartFridge.setCurrentDate(new Date("2022-01-03"))
        smartFridge.scanAddedItem("Milk", "2022-01-03", "sealed");
        const expectedOutput = "Milk: 0 days remaining";
        const actualOutput = smartFridge.showDisplay();
        expect(actualOutput).toEqual(expectedOutput);
    })

    it('should display expired message when the item is expired', ()=>{
        const smartFridge = new SmartFridge();
        smartFridge.setCurrentDate(new Date("2022-01-03"))
        smartFridge.scanAddedItem("Milk", "2022-01-02", "sealed");
        const expectedOutput = "EXPIRED: Milk";
        const actualOutput = smartFridge.showDisplay();
        expect(actualOutput).toEqual(expectedOutput);
    })
})