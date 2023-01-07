# Summary
Create a global webhook alarm microservice. The service will serve as an API for multiple devices to store a future alarm.

### Requirements
- On alarm set off, a configured webhook api will be called.
- Create an alarm.
- Delete an alarm.
- Update an alarm.
- Get all the alarms configured.
- The API will be authorized based on the user.
- Keep the alarm time relevant to the user's timezone. If a user switches timezone then the alarm needs to be adopted in the new timezone. For Instance if a user has set up an alarm to wake him up by triggering a webhook to its (IoT) smart mobile alarm clock. Then that alarm should be triggered at the same time of the corresponding timezone.
- The system should be designed for high availability.

# Solution
- Create an express server with the following authorized API calls
Create alarm
```
Request
    POST /createAlarm
    Authorization Header
    {
        alarmName: string
        alarmWebhook: string
        alarmTimeStamp: string
    }

Response
    200
        Body: {alarmName} was successfully created
    400
        Bad request input validation
    409
        Bad request conflict

```
Get Alarms

```
Request:
    GET /alarms
    Authorization Header
Response
    200
        Body: list of configured alarms along with their configured timestamp
    400        
```

Delete Alarms
```
Request 
    DELETE /alarm?alarmName={nameToDelete}
Response
    200
        Body: success message
```
Update Alarms
```
Request
    PUT /alarm
Response
    200
        response of updated alarms
```

- Storing the date time format:
    + the client from whenever he is will send the alarm timestamp along with the utc offset in this format: `1997-07-16T19:20+01:00` and the server will store it in UTC
    + If the client changes location or timezone/offset in that case an update call will be sent to all the alarms of the users to calculate the new UTC based on the new offset
