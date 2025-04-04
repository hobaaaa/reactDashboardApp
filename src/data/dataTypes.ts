export interface NavigationLinks {
    id: number;
    title: string;
    image: string;
}

export interface Transactions {
    id: number;
    name: string;
    image: string;
    date: string;
    amount: number;
}

export interface ReportData {
    id: number;
    month: string;
    value1: number;
    value2: number | null;
}

export interface Budget {
    id: number;
    title: string;
    type: string | null;
    amount: number;
}

export interface Subscriptions {
    id: number;
    title: string;
    due_date: string;
    amount: number;
}

export interface Savings {
    id: number;
    image: string;
    saving_amount: number;
    title: string;
    date_taken: string;
    amount_left: number;
}