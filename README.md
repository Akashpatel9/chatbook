
# Real Time Chat Application
  This application built using Next.js, React.js, Pusher, Mongoose, Prisma, tailwind and RESTful Web Service.
   
  ![s2](https://github.com/ChetanPatil659/ChatBook/blob/main/public/git%20cover.png)
  
 ![s2](https://github.com/ChetanPatil659/ChatBook/blob/main/public/localhost_3000_conversations_64fd49373eb0b66547c15820.png?raw=true)

# Features
  <li>Uses Next as the application Framework.</li> 
  <li>Real-time communication between a client and a server using Pusher.</li>
  <li>Uses Prisma, Mongo Atlas for storing messages and querying data.</li>
  <li>Uses RESTful Web Service for serve different platforms</li> 
   
# Installation

### Running Locally

Make sure you have Node.js and npm install.

  1. Clone or Download the repository 
    <pre>git clone https://github.com/ChetanPatil659/ChatBook.git
    $ cd ChatBook</pre>
  2. Install Dependencies
      <pre>npm install</pre>
  3. Start the Application
     <pre>npm run dev</pre>
  Application runs from localhost:3000.
          
 ## Pusher
    
   Having an active connection opened between the client and the server so client can send and receive data. This allows             real-time communication using TCP sockets. This is made possible by Pusher.

   The client starts by connecting to the server through a socket(maybe also assigned to a specific namespace). Once connections is successful, client and server can emit and listen to events. 

## RESTful

  Using HTTP requests, we can use the respective action to trigger every of these four CRUD operations.    
    <li>POST is used to send data to a server — Create</li>
    <li>GET is used to fetch data from a server — Read</li>
    <li>PUT is used to send and update data — Update</li>
    <li>DELETE is used to delete data — Delete  </li>
    

  

