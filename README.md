Deploy link: https://sau-chat.vercel.app  
Backend Repo Link: https://github.com/SaurabhSawade/SauChat-backend.git

## Features
1. Users can register/log in with a username
2. Users can search for other users
3. Users can send friend requests
4. Users receive notifications for friend requests
5. Users can accept friend requests
6. Users can see their chat list
7. Users can send messages or attachments in chat
8. Users can create group chats (min 3, max 100 members)
9. Group admins can rename the group, add or remove members
10. Group admins can delete the group
11. Group members can leave the group
12. If the group admin leaves, a new admin is assigned automatically
13. Users can delete a chat or unfriend a user
14. Admin Dashboard to view users, messages, and chats (accessible only with a secret key)

## Tech Stack

**Frontend:**
- React 19
- Redux Toolkit
- React Router v6
- Material-UI (MUI) v7
- Socket.IO Client
- Axios
  

**Backend:**
- Node.js
- Express.js
- MongoDB & Mongoose
- Socket.IO
- JWT Authentication

**Other:**
- Vercel (Frontend Deployment)
- RESTful API
