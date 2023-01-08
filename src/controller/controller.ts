import { Router } from "express";
import { IAlarm } from "../interfaces/IAlarm";
import { createAlarm, deleteAlarm, getAlarms, updateAlarm } from "../services/alarmService";

export const alarmRouter = Router();

/**
 * Create an alarm
 */
alarmRouter.post("/alarm", (req, res, next) => {
    
    const alarmToCreate: IAlarm = req.body;

    const createdAlarm = createAlarm(alarmToCreate);

    // validateAlarm 
    res.send({ createdAlarm });
});

alarmRouter.get("/alarms", (req, res, next) => {
    
    const alarmList = getAlarms();
    res.send({alarmList})
});

alarmRouter.put("/alarm", (req, res, next) => {
    const alarmToUpdate = req.body;

    const updatedAlarm = updateAlarm(alarmToUpdate);

    res.send({updatedAlarm})
});

alarmRouter.delete("/alarm/:alarmId", (req, res, next) => {
    const alarmToDelete = req.params.alarmId;

    const result = deleteAlarm(alarmToDelete);

    res.send(result);
});