export class ContactFormModel {
    
    public Name: string;
    public Email: string;
    public Phone: string;
    public Subject: string;
    public Message: string;

    constructor(Name: string, Email: string, Phone: string, Subject: string, Message: string)
    {
        this.Name = Name;
        this.Email = Email;
        this.Phone = Phone;
        this.Subject = Subject;
        this.Message = Message;
    }
    
}

