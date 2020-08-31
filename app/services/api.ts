import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export interface IFeed {
    id: string;
    autor: IUsuario;
    data: FirebaseFirestoreTypes.Timestamp;
    likes: number;
    postPath: string;
    titulo: string;
}

export interface IPost {
    texto: string;
}

export interface IUsuario {
    nome: string;
    foto: string;
}

export interface IEvento {
    data: Date;
    texto: string;
}

export interface IDonation {
    descricao: string;
    link: string;
    valor: number;
}