module.exports = {
    apps: [
      {
        name: "auth1",
        script: "authServer.js",
        watch: true,
        args: "5000", // Pass port as an argument
      },
      {
        name: "auth2",
        script: "authServer.js",
        watch: true,
        args: "5010", // Pass port as an argument
      },
      {
        name: "product1",
        script: "productServer.js",
        watch: true,
        args: "5001", // Pass port as an argument
      },
      {
        name: "product2",
        script: "productServer.js",
        watch: true,
        args: "5011", // Pass port as an argument
      },
      {
        name: "order1",
        script: "orderServer.js",
        watch: true,
        args: "5002", // Pass port as an argument
      },
      {
        name: "order2",
        script: "orderServer.js",
        watch: true,
        args: "5012", // Pass port as an argument
      },
    ],
  };
  