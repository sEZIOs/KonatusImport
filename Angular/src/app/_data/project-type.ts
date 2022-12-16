export type project = {
    id: number;
    name: string;
    valid: boolean;
    selected: boolean;
    programme_attributs: program [];
    essential_attributs: sheet [];
    optional_attributs: sheet [];
};

type program = {
    konatus: string;
    csv: string;
    value: string;
}

type sheet = {
    konatus: string;
    csv: string;
}


