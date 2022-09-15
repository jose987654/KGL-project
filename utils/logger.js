const winston = require("winston");
const { createLogger, format, transports } = require("winston");

// Import mongodb
require("winston-mongodb");
require("dotenv").config({ path: "./config/config.env" });

module.exports = createLogger({
  levels: winston.config.syslog.levels,
  transports: [
    // File transport
    new transports.File({
      filename: "logs/server.log",
      level: "info",
      format: format.combine(
        format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
        format.align(),
        format.printf(
          (info) => `${info.level}: ${[info.timestamp]}: ${info.message}`
        )
      ),
    }),

    // MongoDB transport
    new transports.MongoDB({
      level: "http",
      //mongo database connection link
      db: process.env.DATABASE,
      options: {
        useUnifiedTopology: true,
      },
      // A collection to save json formatted logs
      collection: "server_logs",
      format: format.combine(
        format.timestamp(),
        // Convert logs to a json format
        format.json()
      ),
    }),
  ],
  exceptionHandlers: [new transports.File({ filename: "logs/server.log" })],
  exitOnError: false,
});
