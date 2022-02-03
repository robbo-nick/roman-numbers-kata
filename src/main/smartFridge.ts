export class SmartFridge {

    private currentDate : Date = new Date; 
    private doorIsOpen : boolean = false;
    private displayMessage : string = "";

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
        let remainingDays;
        const expiryDate = new Date(expiry);

        remainingDays = expiryDate.valueOf() - this.currentDate.valueOf();

        if (this.currentDate <= expiryDate){
            remainingDays = expiryDate.getTime() - this.currentDate.getTime();
            this.displayMessage = `${name}: ${remainingDays} days remaining`;
        }
        else{
            this.displayMessage = `EXPIRED: ${name}`;
        }
    }

    signalDoorClosed() {
        this.doorIsOpen = false;
    }

    showDisplay(): string {
        return this.displayMessage;
    }
}
