import {SmartFridge} from "../../main/smartFridge";

describe('SmartFridge', () => {
    it ("GIVEN an item is added in the fridge WHEN I check the display THEN it should show the details of the added item", () => {
        const smartFridge = new SmartFridge();
        smartFridge.setCurrentDate(new Date("2022-01-03"));
        smartFridge.signalDoorOpened()
        smartFridge.scanAddedItem("Milk", "2022-01-03","sealed");
        smartFridge.signalDoorClosed()

        const expectedDisplayMessage = "Milk: 0 days remaining";

        const actualDisplayMessage = smartFridge.showDisplay();
        expect((actualDisplayMessage)).toEqual(expectedDisplayMessage);
    })
})

