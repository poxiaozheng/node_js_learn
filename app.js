const Koa = require('koa');
const KoaRouter = require('koa-router');

const app = new Koa();

const router = new KoaRouter();

router.get("/", async ctx => ctx.body = "Welcome to CI/CD Service! With Auto Deploy!");

app.use(router.routes());

const PORT = process.env.PORT || 3000;
console.log(`App is listening on ${PORT}`);
app.listen(PORT);
