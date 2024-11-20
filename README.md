🌐 Microservices Architecture Simulation 🚀

Welcome to Microservices Simulation! This is a simple yet exciting project showcasing the power of microservices architecture! 🌟

📂 Project Structure 🗂️

Here’s how the project is laid out:


```rust
📦 cload
├── authServer.js       🔑 Handles user authentication.
├── orderServer.js      🛒 Manages orders and transactions.
├── productServer.js    📦 Deals with products and inventory.
├── models/             🧩 Data models for the services.
├── controllers/        🎮 Controllers to manage logic.
├── middlewares/        🛡️ Middleware for validations & security.
├── routes/             🗺️ Routes for API endpoints.
├── nginx.conf          🕸️ Configuration for the NGINX load balancer.
├── package.json        📜 Dependencies and project metadata.
├── package-lock.json   🔐 Lock file for consistent dependencies.
└── node_modules/       📚 Installed dependencies.
```

🛠️ How It Works 🎯

This simulation includes three key microservices:


Authentication Service 🔑


Takes care of login, registration, and token validation.

Your gatekeeper! 🛡️

Order Service 🛒


Manages all orders, keeping track of who bought what.

Your personal shopping assistant! 🛍️

Product Service 📦


Handles inventory and product details.

The ultimate store manager! 🏪

All these services communicate seamlessly through REST APIs 🌐, with an optional NGINX load balancer to distribute traffic efficiently. ⚡


🚀 Getting Started

Clone the repository 🖇️:

```bash
git clone https://github.com/yvesdylane/microserves-API
cd microserves-API
```

Install dependencies 📥:

```bash
npm install
Run the servers 🖥️:
```


```bash
# Start the Authentication Server 🔑
node authServer.js
```

# Start the Order Server 🛒

node orderServer.js


# Start the Product Server 📦

node productServer.js

(Optional) Set up NGINX 🕸️, PM2 was also use:


Use the nginx.conf file for configuring load balancing.

Starting multiple instances, managing processes using pm2

```bash
# Run the first instance on port 5000
pm2 start authServer.js --name auth1 --watch -- 5000

# Run the second instance on port 5010
pm2 start authServer.js --name auth2 --watch -- 5010

# Run the first instance on port 5001
pm2 start productServer.js --name product1 --watch -- 5001

# Run the second instance on port 5011
pm2 start productServer.js --name product2 --watch -- 5011

# Run the first instance on port 5002
pm2 start orderServer.js --name order1 --watch -- 5002

# Run the second instance on port 5012
pm2 start orderServer.js --name order2 --watch -- 5012
```

Test it out! 🛠️

Use tools like Postman or curl to make API calls and simulate client interactions. 📡


🎉 Features

✨ Token-based authentication for secure access.

✨ Order tracking to keep things organized.

✨ Product management with real-time inventory updates.

✨ Load balancing for improved scalability.


🥳 Why This Project?

This project is perfect for:

🌱 Learning microservices architecture in Node.js.

👩‍💻 Understanding API communication between services.

🚀 Experimenting with load balancing using NGINX.


📸 Sneak Peek

Here's how the services interact:

```plaintext
CLIENT --> NGINX --> Auth Server 🔑
                   --> Order Server 🛒
                   --> Product Server 📦
```

💬 Feedback & Contributions

Have suggestions or ideas? Feel free to open an issue or create a pull request! We’re all ears! 👂✨


🎉 Happy Coding! 💻✨

Made with ❤️ by Yves Dylane.

