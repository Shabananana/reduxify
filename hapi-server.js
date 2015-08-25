import React from 'react';
import Root from './common/containers/Root';
import Router from 'react-router';
import MemoryHistory from 'react-router/lib/MemoryHistory';
import Location from 'react-router/lib/Location';
var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 9000 });

server.route({
    method: 'GET',
    path: '/static/{filename}',
    handler: function (request, reply) {
        reply.file('./dist/' + request.params.filename);
    }
});

server.route({
    method: 'GET',
    path: '/{path*}',
    handler: function (request, reply) {
      const baseRoute = request.params.path || '/';
      const html = React.renderToString(
        <Root history={new MemoryHistory([ baseRoute ])} />
      );
      reply(renderFullPage(html, null));
    }
});

function renderFullPage(html, initialData) {
  return `<!doctype html>
          <html>
            <head>
              <title>Test UGC App!</title>
              <style>
                .selected {
                  background-color: pink;
                }
                .filled {
                  background-color: red;
                }
              </style>
            </head>
            <body>
              <h1>Test UGC App!</h1>
              <div id="root">${html}</div>
              <script>
                __INITIAL_DATA__ = ${JSON.stringify(initialData)};
              </script>
              <script src="./static/bundle.js"></script>
            </body>
          </html>`
}

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
