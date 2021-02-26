
export const tododata: Task[] = [
    {
        name: "Start making a presentation",
        tag: "work",
        complete: false,
    },
    {
        name: "Pay for rent",
        tag: "Personal",
        time: 1,
        complete: true,
    },
    {
        name: "Buy a milk",
        tag: "Shopping",
        complete: false,
    },
    {
        name: "Don't forget to pick up Mickael from school",
        complete: false,
    },
    {
        name: "Buy a chocolate for Charlotte",
        tag: "Shopping",
        complete: false,
    }
];

export interface Task {
    name: string,
    tag?: string,
    complete: boolean,
    time?: number,
}

export const tagcolors = [
    { name: "Inbox", color: '#EBEFF5' },
    { name: "Work", color: "#61DEA4" },
    { name: "Shopping", color: "#F45E6D" },
    { name: "Family", color: "#FFE761" },
    { name: "Personal", color: "#B678FF" },
]
