import { Router } from "express";
import { IAlarm } from "../interfaces/IAlarm";
import { alarmStore } from "../storage/alarmStorage";
import { validateAlarm } from "../utils/alarmValidator";

export const alarmRouter = Router();

/**
 * Create an alarm
 */
alarmRouter.post("/alarm", (req, res, next) => {
    
    const alarm: IAlarm = req.body;
    console.log(req.body);

    // validateAlarm 
    if (!validateAlarm(alarm)) {
        res.send({message: "Bad Request"});
    }

    console.log('storing to memory');
    alarmStore.push(alarm);
    res.send({message: "Sucsssfully created alarm"});
});

alarmRouter.get("/alarms", (req, res, next) => {
    res.send({"alarms": alarmStore.toString()});
})
