export class User{
    constructor(name, email, pass){
        this.id=Date.now(),
        this.name=name,
        this.email=email,
        this.password=pass

    }
}