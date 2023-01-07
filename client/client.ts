/**
 * Create timestamp with the desired alarm time in YYYY-MM-DDThh:mm:ss
 */
import * as http from 'http';

const timeDate = ""
const alarmTimestamp = new Date('2023-02-21T14:12:53');
const offset = new Date().getTimezoneOffset();


const getAlarms = () => {
    http.get("http://localhost:3000/alarms", (resp) => {
        resp.on('data', (data) => {
            console.log(JSON.parse(data));
        })
    });
}

getAlarms();