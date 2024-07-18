# Self Learning

## Zoom Clone

A Zoom clone application built using WebRTC, Express, ejs, socket.io, uuid, nodemon, and PeerJS.

### Technologies Used

- **WebRTC**: Real-time communication for audio and video streaming.
- **Express**: Web framework for Node.js to create the server.
- **ejs**: Embedded JavaScript templates for rendering HTML.
- **socket.io**: Real-time, bi-directional communication between web clients and servers.
- **uuid**: For generating unique IDs.
- **nodemon**: Automatically restarting the node application when file changes are detected.
- **PeerJS**: Peer-to-peer data, video, and audio calls.

### Prerequisites

Make sure you have Node.js and npm installed on your system.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/gitFerdo/Learning_code.git
   cd Learning_code
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Install PeerJS globally:
   ```sh
   npm install -g peer
   ```

### Running the Application

1. Start the server:
   ```sh
   npm run devStart
   ```

2. Start PeerJS server:
   ```sh
   peerjs --port 3001
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Scripts

- `npm run devStart`: Start the server with nodemon for development.