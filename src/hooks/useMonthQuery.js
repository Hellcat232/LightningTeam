import { useDispatch, useSelector } from "react-redux";
import { selectFullMonthWaterX } from "../redux/water/selectors.js";
import useCalendar from "./getCalendar.js";
import { getMonthWaterFrontConteroller } from "../redux/water/operations.js";
import { useEffect } from "react";

export const useMonthQuery = () => {
    const dispatch = useDispatch();
    const monthWaterRecord = useSelector(selectFullMonthWaterX);
    const { currentDate } = useCalendar(monthWaterRecord);

    useEffect(() => {
        const dateParam = `${(currentDate.getMonth() + 1)
            .toString()
            .padStart(2, "0")}-${currentDate.getFullYear()}`;
        dispatch(getMonthWaterFrontConteroller(dateParam));
    }, [dispatch, currentDate]);

    const dispatchDate = () => {
        const dateParam = `${(currentDate.getMonth() + 1)
            .toString()
            .padStart(2, "0")}-${currentDate.getFullYear()}`;
        dispatch(getMonthWaterFrontConteroller(dateParam));
    };

    return { currentDate, dispatchDate };
};
