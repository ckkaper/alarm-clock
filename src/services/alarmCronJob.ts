import { alarmStore } from "../storage/alarmStorage";
import { fireWebhookCheck } from "../utils/timeUtils";

export function alarmCronJob() {
    setInterval(() => {
        // read from storage and fire alarm
        console.log('Cronjob check...');
        alarmStore.forEach((alarm) => {
            fireWebhookCheck(alarm.alarmTimestamp);
        });
    }, 30 * 1000);
}