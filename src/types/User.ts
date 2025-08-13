interface IUser {
    id: number;
    username: string;
    name: string;
    phone: string;
    website: string | null;
    address: {
        city: string;
        street: string;
        suite: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    company: {
        name: string;
        bs: string;
        catchPhrase: string;
    } | null;
}
export type {IUser}