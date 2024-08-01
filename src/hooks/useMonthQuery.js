import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMonthWaterFrontConteroller } from "../redux/water/operations.js";

const formatDateToMMYYYY = (date) => {
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${month}-${year}`;
}

const parseDateString = (dateString) => {
    const [day, month, year] = dateString.split('.').map(Number);
    return new Date(year, month - 1, day);
}

export const useMonthQuery = (currentDate) => {
    const dispatch = useDispatch();

    const dispatchDate = (date) => {
        if (date) {
            const parsedDate = typeof date === 'string' ? parseDateString(date) : date;
            const formattedDate = formatDateToMMYYYY(parsedDate);
            return dispatch(getMonthWaterFrontConteroller(formattedDate));
        }
    }

    useEffect(() => {
        if (currentDate) {
            dispatchDate(currentDate);
        }
    }, [currentDate, dispatch]);

    return { dispatchDate };
};
