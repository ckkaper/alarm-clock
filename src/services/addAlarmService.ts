import { IAlarm } from "../interfaces/IAlarm";
import { alarmStore } from "../storage/alarmStorage";

    const addAlarm = (alarm: IAlarm) => {

        alarmStore.push(alarm); 
    }

    const getAlarms = (): IAlarm[] => {
        return alarmStore;
    }

    // TODO: add rest of APIs

module.exports = {
    addAlarm,
    getAlarms
};