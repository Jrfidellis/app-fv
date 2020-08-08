interface IFeed {
    autor: string;
    data: Date;
    likes: number;
    texto: string;
    titulo: string;
}

interface IPost {
    texto: string;
}

interface IUsuario {
    nome: string;
}

interface IEvento {
    data: Date;
    texto: string;
}

interface IDonation {
    descricao: string;
    link: string;
    valor: number;
}