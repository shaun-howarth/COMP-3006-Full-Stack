# COMP-3006-Full-Stack

## MiDash

This repository contains the source code and assets for my COMP3006 University module. The Full Stack web application named "MiDash" needed to meet the requirements of being interactive and responsive with behaviour and the transmission of data using Node.js, web sockets (socket.IO) and MongoDB as the document oriented server side database. 

## What is MiDash?

MiDash is an interactive web app that consists of an online/electronic To-Do list and a live chat room that can be operated between multiple cleints. A task on the To-Do list web page can be created, updated and deleted. A schema within Mongo db is used to store the relevant string data for each task card and communicates with the ExpressJS web API so that CRUD functionality can be made between the web page and database.

The live chat room web page uses the Socket.IO library within the server so that multiple clients can access the same chat room simultaneously. When a user enters the web page a promt will come up asking to enter in a guest name. Once a name has been entered the user will join the chat room with that guest name. The clients who are typing text messages to each other will be labelled with their guest names in the live chat. 

## Link to YouTube video demonstration of web app:



## Third Party visualisation tools used (sources credited):

Font-Awesome SVG icons from GitHub repository: used in ejs files. 


