# Angular-february-2024

Angular Course Overview

The "Angular" course aims to equip participants with both knowledge and practical skills for building client-side applications, specifically Single Page Applications (SPAs), using the Angular technology. Developed by Google, Angular stands as one of the most popular frameworks today.

Throughout the course, participants will delve into TypeScript, understanding its fundamental syntax and concepts, and exploring its advantages over JavaScript in browser and mobile platform development. They will explore Single Page Applications (SPAs), architectural patterns for SPA applications, components, directives, and their implementation in Angular.

Additionally, the course covers views and data visualization templates, models, components, data binding, working with multiple views, observables, routing, data retrieval from REST services, and dependency injection (DI).

By the end of this course, participants will have a solid understanding of Angular and the necessary skills to develop robust SPAs effectively.

### For restore mongo db in docker you can use: 

run docker:
docker run -d --name mongodb -p 27017:27017 -v /path/to/forum:/home/forum mongo

connect to container:
then docker exec -it mongodb  /bin/bash          

run command:
then mongorestore -d forum /home/forum/forum


