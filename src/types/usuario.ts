export type UsuarioType = {
    tipo: UsuarioEnum;
    apelido: string;
    avatar: { url: string };
    };

export enum UsuarioEnum {
    cpsi,
    idoso,
    responsavel
}

export const usuario_idoso: UsuarioType = {
    tipo: UsuarioEnum.idoso,
    apelido: 'Minora',
    avatar: {url: "/idosa.jpg"},
}
export const usuario_cpsi: UsuarioType = {
    tipo: UsuarioEnum.cpsi,
    apelido: 'CPSI',
    avatar: {url: "/perfil-transparente.svg"},
}
