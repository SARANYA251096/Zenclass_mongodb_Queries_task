// Find all the topics and tasks which are thought in the month of October
db.topics.find({"taught_month" : {$eq:"October"}})

// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.companydrives.find({drive_date: {$gte: "15-oct-2020", $lte: "31-oct-2020"}})


// Find all the company drives and students who are appeared for the placement.
db.companydrives.find({company:1})

// Find the number of problems solved by the user in codekata
db.codekata.find({ userid: 1 }, { problems:1 });

// Find all the mentors with who has the mentee's count more than 15
db.mentors.find({"mentee's_count": {$gt: 15}})

// Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.tasks.find({submitted: {$gte: "15-oct-2020", $lte: "31-oct-2020"}})

db.tasks.find({due_date:{$gte:"15-oct-2020", $lte: "31-oct-2020"}},{submitted: {$eq:true}})