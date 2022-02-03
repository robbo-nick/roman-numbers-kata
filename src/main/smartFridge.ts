export class SmartFridge {

    private currentDate : Date = new Date; 
    private doorIsOpen : boolean = false;

    getDoorIsOpen() : boolean {
        return this.doorIsOpen;
    }  

    getCurrentDate(): Date {
        return this.currentDate;
    }

    setCurrentDate(date: Date) {
        this.currentDate = date;
    }

    signalDoorOpened() {
        this.doorIsOpen = true;
    }

    scanAddedItem(name: string, expiry: string, condition: string) {

    }

    signalDoorClosed() {
        this.doorIsOpen = false;

    }

    showDisplay(): string {
        throw new Error("Not implemented")
    }
}
