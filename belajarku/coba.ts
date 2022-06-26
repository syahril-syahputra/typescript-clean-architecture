class printer {
    printOk(pesan: string): void {
        console.log("OK > " + pesan);
    }

    printError(pesan: string): void {
        console.log("ERROR > " + pesan);
    }
}

class service {
    private printer = new printer();
    coba1 = () => {
        this.printer.printOk("coba ke satu");
    };
    coba2 = () => {
        this.printer.printError("Coba ke dua")
    }
}

const a = new service()
a.coba2()