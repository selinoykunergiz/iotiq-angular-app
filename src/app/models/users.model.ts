export class UsersModel{
    id: number;
    name: string;
    username: string;
    email: string;
    address: address;
    city: string;
    zipcode: string;
    phone: string;
    website: string;
    company : {
            name: string;
            catchPhrase: string;
            bs: string;
    }; 
}

export class address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

// export class company{
//     name: string;
//     catchPhrase: string;
//     bs: string;
// }