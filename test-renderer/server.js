import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config';

const compiler = Webpack(webpackConfig);

const devServerOptions = {
 ...webpackConfig.devServer,
 open: true,
};

const server = new WebpackDevServer(devServerOptions, compiler);

server
.start()
.then(() => {
 console.log('Starting server on http://localhost:3000');
});
