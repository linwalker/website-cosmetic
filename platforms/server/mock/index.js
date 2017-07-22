import { mock } from 'mockjs'

export function appConfig() {
    return {
        code: 200,
        msg: 'ok',
        result: mock({
            "id|+1": 100,
            "username": '@cname',
            "email": '@email',
            "mobile|13800000000-13999999999": 13800004500,
            "gmtCreate": 1455614704000,
            "gmtUpdate": 1462593500000,
            "avator": "@image(100x100)",
            "county": "@county(true)"
        })
    }
}