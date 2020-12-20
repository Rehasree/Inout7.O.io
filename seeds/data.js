const data = {
    "age_15": {
        "questions": [
            {
                "id": 1,
                "question": "What is ur name",
                "opts": ['sat', 'rut', 'bhawan', 'reha']
            },
            {
                "id": 2,
                "question": "In which standard are you studying",
                "opts": [8, 10, 9, 7]
            },
            {
                "id": 3,
                "question": "Who is your best friend",
                "opts": ['ganesh', 'dinesh', 'lokesh', 'suresh']
            }
        ]
    },
    "age_18": {
        "questions": [
            {
                "id": 1,
                "question": "In which cllg ur studing",
                "opts": ['narayana', 'chaithanya', 'velocity', 'abcd']
            },
            {
                "id": 2,
                "question": "What is your favourate subject",
                "opts": ['MATHS', 'PHYSICS', 'CHEMISTRY']
            }
        ]
    },
    "age_21": {
        "questions": [
            {
                "id": 1,
                "question": "Did you cracked JEE",
                "opts": ['yes', 'no']
            },
            {
                "id": 2,
                "question": "In which college your studying",
                "opts": ['IIT', 'NIT', 'IIIT', 'LOCAL']
            },
            {
                "id": 3,
                "question": "Did u enjoyed ur btech live",
                "opts": ['yes', 'no']
            }
        ]
    },
}

module.exports = data;









// < !DOCTYPE html >
//     <html lang="en">

//         <head>
//             <meta charset="UTF-8">
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                     <title>Survey</title>
// </head>

//                 <body>
//                     <h1>This is survey corner for <%= age %> age members </h1>

//                     <form action="/results" method="POST">
//                         <% if(age <= 15){ %>

        // <% for(let d of data1){ %>
        // <h3><%= d.question %> </h3>
        // <% d.options.forEach(opt => { %>
        // <li>
        //     <input type="radio" id="val" name=<%= d._id %> value="<%= opt %> " required>
        //     <label for="val"><%= opt %></label>
        // </li>
        // <% }) %>
        // <% } %>

//         <% } else if (age > 15 && age <=18){ %>

//         <% for(let d of data2){ %>
//         <h3><%= d.question %> </h3>
//         <% d.options.forEach(opt => { %>
//         <li>
//             <input type="radio" id="val" name=<%= d._id %> value="<%= opt %> " required>
//             <label for="val"><%= opt %></label>
//         </li>
//         <% }) %>
//         <% } %>

//         <%} else {%>

//         <% for(let d of data3){ %>
//         <h3><%= d.question %> </h3>
//         <% d.options.forEach(opt => { %>
//         <li>
//             <input type="radio" id="val" name=<%= d._id %> value="<%= opt %> " required>
//             <label for="val"><%= opt %></label>
//         </li>
//         <% }) %>
//         <% } %>

//         <% } %>
//         <button>Submit</button>
//                     </form>

//                 </body>

// </html>



