import util from 'util';

export const hello = async(req, res) => {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
    const name = req.swagger.params.name.value || 'stranger';

    const resObj = await Promise.resolve();

    const hello = util.format('Hello, %s!', name);
  // this sends back a JSON response which is a single string

    res.json(hello);
};
