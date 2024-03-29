// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = "style-loader";

const config = [{
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'soundo.js',
    library: "soundo",
    libraryTarget: 'umd'
  },
  plugins: [
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    parser: {
      javascript: {
        worker: [
          "AudioWorklet from ./audio-worklet",
          "AudioWorklet from ../audio-worklet",
          "..."
        ]
      }
    },
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
        options: {
          plugins: ["import-directory"]
        }
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
}, {
  entry: "./src/test.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'sound_objects_test.js'
  },
  plugins: [
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
        options: {
          plugins: ["import-directory"]
        }
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
}];

module.exports = () => {
  return config.map(cfg => {
    if (isProduction) {
      cfg.mode = "production";
    } else {
      cfg.mode = "development";
    }
    return cfg;
  });
};
