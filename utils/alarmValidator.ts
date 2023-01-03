import { IAlarm } from "../interfaces/IAlarm";
import { alarmStore } from "../storage/alarmStorage";

export const validateAlarm = (alarm: IAlarm): boolean => {
    
    // alarmName should be unique for an existing user
    const alarmExists = alarmStore.find((storedAlarm: IAlarm) => 
        storedAlarm.alarmOwner == alarm.alarmOwner
        && storedAlarm.alarmName == alarm.alarmName 
    )

    if (alarmExists !== undefined) {
        return false;
    }

    if (alarm.alarmOwner == null || alarm.alarmTimestamp == null ) {
        return false;
    }

    return true;
}