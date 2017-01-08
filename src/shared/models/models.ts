export class Property {
    title: string;
    type: string;
    marker: Marker;
    rentals: RentalPayment[];
    expenses: ExpensePayment[];
    owner: Owner;
}

export class Marker {
    lat: number;
    lng: number;
    icon: string;
}

export class Expense {
    title: string;
    amount: number;
    month: string;
    year: string;
}

export class Owner {
    title: string;
    quota: string;
}

export class Rental {
    contract: string;
    amount: number;
    duration: number;
    month: string;
    year: string;
    renter: Renter
}

export class Renter {
    title: string;
    AFM: string;
}

export class RentalPayment {
    property: Property;
    rental: Rental;
    month: string;
    year: string;
}

export class ExpensePayment {
    property: Property;
    expense: Expense;
    month: string;
    year: string;
}