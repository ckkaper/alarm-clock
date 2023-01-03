import { Router } from "express";
import { IAlarm } from "../interfaces/IAlarm";
import { alarmStore } from "../storage/alarmStorage";
import { validateAlarm } from "../utils/alarmValidator";

const alarmRouter = Router();

/**
 * Create an alarm
 */
alarmRouter.post("/alarm", (req, res, next) => {
    
    const alarm: IAlarm = req.body;

    // validateAlarm 
    if (!validateAlarm(alarm)) {
        res.status(400).send({message: "nullCheck"});
    }

    // store alarm for current timezone
    // if timezones match then store the alarm

    // if timezones differ then calculate the timestamp based on the current timezone. 
    var serverTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    if (serverTimeZone === alarm.alarmTimezone) {
        console.log('creating an alarm');
        alarmStore.push(alarm);
        res.status(200).send({message: "alarm created"});
    }

    var serverTimeZoneOffset = new Date().getTimezoneOffset();
    var cliemtTimeZoneOffset = new Date(alarm.alarmTimestamp)



});
