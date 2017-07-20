import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';

export default async (ctx, next) => {
    let _renderProps;

    match({routes: require('../../app/routes'), location: ctx.url}, (err, redirectLocation, renderProps) => {
        _renderProps = renderProps;
    })

    if (_renderProps) {
        await ctx.render('index', {
            app: renderToString(
                <Provider>
                    <RouterContext {..._renderProps} />
                </Provider>
            ),
            dev: ctx.app.env === 'development'
        })
    } else {
        await next();
    }
}