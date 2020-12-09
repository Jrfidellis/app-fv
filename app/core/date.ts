
function addZero(n: number) {
    if (n < 10) {
        return `0${n}`
    }

    return n
}

export function dateFormat(date: Date): string {
    const dia = date.getDate();
    const mes = date.getMonth() + 1;
    const ano = date.getFullYear().toString().substring(2, 4);


    return `${addZero(dia)}/${addZero(mes)}/${ano}`;
}

export function timeFormat(date: Date): string {
    const hora = date.getHours();
    const minuto = date.getMinutes();

    return `${addZero(hora)}:${addZero(minuto)}h`;
}