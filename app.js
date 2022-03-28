const schedule = require ('node-schedule');
//runs at 1pm the first of each month//
const rule = new schedule.RecurrenceRule();
rule.month=[0, new schedule.Range(0,1,2,3,4,5,6,7,8,9,10,11)];
rule.date = 1
rule.hour = 13;
rule.minute = 0;
rule. tz =MST;
//
const job = schedule.scheduleJob(rule, function(){
  console.log('some stuff to do ');
});
//runs weekly, monday at 5pm//
const rule = new schedule.RecurrenceRule();
rule.dayOfWeek =1;
rule.hour = 17;
rule.minute = 0;
rule.tz =MST;

const reminder= schedule.scheduleJob(rule, function(){
  console.log('adulting is hard');
  
});
// runs everyday//
const rule = new schedule.RecurrenceRule();
rule.hour = 13;
rule.minute = 0;
rule.tz =MST;
const agenda= schedule.scheduleJob(rule, function(){
    console.log('I think I need a nap');
});
   