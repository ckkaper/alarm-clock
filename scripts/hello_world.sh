curl -X POST http://localhost:3000/alarm -H "Content-Type: application/json" -d '{
        "alarmOwner": "kyriakos",
        "alarmName": "testAlarm"
        "webHook": "https://www.google.com",
        "alarmTimestamp": "1997-07-16T19:20:30";
        "timeZoneOffset": "-120";
    }'