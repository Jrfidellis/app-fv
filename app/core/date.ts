
function addZero(n: number) {
    if (n < 10) {
        return `0${n}`
    }

    return n
}

export function dateFormat(date: Date): string {
    const dia = date.getDate()
    const mes = date.getMonth() + 1
    const ano = date.getFullYear()


    return `${addZero(dia)}/${addZero(mes)}/${ano}`
}