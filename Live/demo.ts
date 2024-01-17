class Person
{
    private _firstName : string = '';
    private _lastName: string = '';
    private _age: number = 0;

    public introduce()
    {
        console.log(`${this._firstName} ${this._lastName} (${this._age})`);
    }
}

class Employee extends Person
{
    private _job: string = '';
}