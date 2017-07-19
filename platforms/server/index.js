import Koa from 'koa';
import path from 'path';
import views from 'koa-views';
import json from 'koa-json';
import logger from 'koa-logger';
import koaStatic from 'koa-static-plus';
import koaOnError from 'koa-onerror';
import convert from 'koa-convert';
import Bodyparser from 'koa-bodyparser';
import http from 'http';

const templatePath = path.join(__dirname, '.views');
const app = new Koa();
app.env = 'development';

app.use(convert(Bodyparser()));
app.use(convert(json()));
app.use(convert(logger()));

app.use(convert(koaStatic('../../public')));

app.use(views(templatePath, { extension: 'ejs' }));

koaOnError(app, { template: templatePath + '/500.ejs' });

if (app.env === 'development') {
    app.use(async (ctx, next) => {
        const start = new Date();
        await next();
        const ms = new Date() - start;
        console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    })
}

app.use('/', async(ctx) => {
    ctx.render('index', {
        app: 'website-consmetic'
    })
})
app.use(async (ctx) => {
    ctx.status = 404;
    await ctx.render('404');
});

const server = http.createServer(app.callback());
server.listen(3099, () => {
    console.log('App started, bind port %d, CTRL + C to terminate', 3099)
});
