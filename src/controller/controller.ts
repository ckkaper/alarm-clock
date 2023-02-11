import { Router } from "express";
import { IAlarm } from "../interfaces/IAlarm";
import { createAlarm, deleteAlarm, getAlarms, updateAlarm } from "../services/alarmService";

export const alarmRouter = Router();

/**
 * Create an alarm
 */
alarmRouter.post("/alarm", (req, res, next) => {
    
    const alarmToCreate: IAlarm = req.body;

    if (Object.keys(req.body).length < 1) {
        res.status(400).send("Invalid request");
    }

    const createdAlarm = createAlarm(res, alarmToCreate);

    res.send({ createdAlarm });
});

alarmRouter.get("/alarms", (req, res, next) => {
    
    const alarmList = getAlarms();
    res.send({alarmList})
});

alarmRouter.put("/alarm", (req, res, next) => {
    const alarmToUpdate = req.body;

    const updatedAlarm = updateAlarm(res, alarmToUpdate);

    res.send({updatedAlarm})
});

alarmRouter.delete("/alarm/:alarmName", (req, res, next) => {
    const alarmToDelete = req.params.alarmName;

    const result = deleteAlarm(res, alarmToDelete);

    res.send(result);
});