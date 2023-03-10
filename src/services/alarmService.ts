import { IAlarm } from "../interfaces/IAlarm";
import { alarmStore } from "../storage/alarmStorage";
import { validateAlarm } from "../utils/alarmValidator";
import { convertToUTC } from "../utils/timeUtils";

    const createAlarm = (res: any, alarm: IAlarm): IAlarm => {

        if (!validateAlarm(alarm)) {
            return res.status(400).send("Invalid alarm");
        }
        var utc = convertToUTC(alarm.alarmTimestamp, alarm.timeZoneOffset);

        alarmStore.push(alarm);
        return alarm;
    }

    const getAlarms = (): IAlarm[] => {
        return alarmStore;
    }

    const updateAlarm = (res: any, alarm: IAlarm): IAlarm => { 
        
        validateAlarm(alarm);

        const index = alarmStore.findIndex((a) => a.alarmName === alarm.alarmName);

        if (index < 0) {
            res.status(404).send("Item not found");
            new Error("item not found to update");
        }

        alarmStore.splice(index, 1);

        alarmStore.push(alarm);
        return alarm; 
    }

    const deleteAlarm = (res: any, alarmName: string): boolean => {
        
        const index = alarmStore.findIndex((a) => a.alarmName == alarmName);

        if (index < 0) {
            res.status(404).status("Item not found");
            new Error("item not found to update");
        }

        alarmStore.splice(index, 1);
        return true;
    }

export {
    createAlarm,
    getAlarms,
    updateAlarm, 
    deleteAlarm
};