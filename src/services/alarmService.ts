import { IAlarm } from "../interfaces/IAlarm";
import { alarmStore } from "../storage/alarmStorage";
import { validateAlarm } from "../utils/alarmValidator";

    const createAlarm = (alarm: IAlarm): IAlarm => {

        alarmStore.push(alarm);
        return alarm;
    }

    const getAlarms = (): IAlarm[] => {
        return alarmStore;
    }

    const updateAlarm = (alarm: IAlarm): IAlarm => { 
        
        validateAlarm(alarm);

        const index = alarmStore.findIndex((a) => a.alarmName === alarm.alarmName);
        console.log(index);

        if (index < 0) {
            new Error("item not found to update");
        }

        alarmStore.splice(index, 1);

        alarmStore.push(alarm);
        return alarm; 
    }

    const deleteAlarm = (alarmName: string): boolean => {
        
        const index = alarmStore.findIndex((a) => a.alarmName == alarmName);

        if (index < 0) {
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