export default async (ctx, next) => {
    // 异步接口请求
    // if (ctx.path.match(/^\/api/)) {
    //     return await require('./api').routes()(ctx, next);
    // }

    // 页面请求
    await require('./render')(ctx, next);
}