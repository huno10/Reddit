import { useContext } from "react";
import { cardContext } from "../../CardContext";

export function DatePostUtc() {
    const { datePostUtc } = useContext(cardContext);
    let formattedTime = "";

    if (datePostUtc !== undefined) {
        const dataUtc = new Date(datePostUtc * 1000);
        const currentDate = new Date();
        const timeDifference = currentDate.getTime() - dataUtc.getTime();
        const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));

        if (hoursDifference < 1) {
            formattedTime = "меньше часа назад";
        } else if (hoursDifference === 1 || hoursDifference === 21) {
            formattedTime = `${hoursDifference} час назад`;
        } else if (hoursDifference >= 5 && hoursDifference <= 20) {
            formattedTime = `${hoursDifference} часов назад`;
        } else if (hoursDifference < 24) {
            formattedTime = `${hoursDifference} часа назад`;
        } else {
            const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
            formattedTime = new Intl.DateTimeFormat(undefined, options).format(dataUtc);
        }
    }

    return formattedTime;
}




