export function convertToUTC(timestamp: string, serverOffset = 0): string {
    return new Date(timestamp).getTime().toString();
}

export function fireWebhookCheck(alarmTimestamp: string) {
    var alarmDateInUTCEpoch = new Date(alarmTimestamp).getTime();

    if (alarmDateInUTCEpoch <= (new Date().getTime() + 35 * 1000) && alarmDateInUTCEpoch >= (new Date().getTime())) {
        console.log('Fire alarm');
    }
}