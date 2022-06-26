namespace testing {

    class printer implements IPrinter {
        printOk(pesan: string): void {
            console.log("OK > " + pesan);
        }

        printError(pesan: string): void {
            console.log("ERROR > " + pesan);
        }
    }

    class printer2 implements IPrinter {
        printOk(pesan: string): void {
            throw new Error("Method not implemented.");
        }
        printError(pesan: string): void {
            throw new Error("Method not implemented.");
        }
    }

    interface IPrinter{
        printOk(pesan: string): void;
        printError(pesan: string): void;
    }



    class service {

        private printer : IPrinter;

        //di constructure kita injek class printer ke daalam class service
        constructor(prnter :IPrinter){
            this.printer = prnter;
        }
        coba1 = () => {
            this.printer.printOk("coba ke satu");
        };
        coba2 = () => {
            this.printer.printError("Coba ke dua");
        };
    }

    //kelebihan inversion kalau itu printer2 kita ganti ganti jadi aman
    const a = new service(new printer2);
    a.coba2();
}
