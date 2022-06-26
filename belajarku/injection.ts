namespace testing {
    class printer {
        printOk(pesan: string): void {
            console.log("OK > " + pesan);
        }

        printError(pesan: string): void {
            console.log("ERROR > " + pesan);
        }
    }

    //contoh ternyata printer mau di ganti
    class printer2 {

        printOk(pesan: string): void {
            throw new Error("Method not implemented.");
        }
        printError(pesan: string): void {
            throw new Error("Method not implemented.");
        }
    }

    class service {

        private printer : printer2;

        //di constructure kita injek class printer ke daalam class service
        constructor(prnter :printer2){
            this.printer = prnter;
        }
        coba1 = () => {
            this.printer.printOk("coba ke satu");
        };
        coba2 = () => {
            this.printer.printError("Coba ke dua");
        };
    }

    //disini kalau pakai injection biasa kita harus merubah di class nya juga karna service tergantung dari printer
    const a = new service(new printer2);
    a.coba2();
}
