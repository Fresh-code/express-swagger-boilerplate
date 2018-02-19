import {instance, ENV_MIGRATION} from './instance';


async function migrate () {
    try {
        await instance.up(null, ENV_MIGRATION);
    } catch (e) {
        console.log('EROOR', e);
        console.log(e.stack);
        throw e;
    }
}


export default migrate;
