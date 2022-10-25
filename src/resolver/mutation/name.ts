import { NameModel } from "../../model";
import { Input, Output } from "req-res-formatter";

const mutationName = {
    createName: async (req: any, res: any) => {
        let name;
        try {
            // format input data
            let data = Input.create(req);

            // store data record
            name = await NameModel.create(data);
        } catch (e) {
            console.log(e);
        }

        // format output data
        return Output.response(req, name, res);
    },
    updateName: async (req: any, res: any) => {
        let id: number, data: any;

        // format input data
        [data, id] = Input.update(req);

        // update name by id
        const name = await NameModel.findOneAndUpdate({ _id: id }, data, { new: true }).catch((e) => console.log(e));

        // format output data
        return Output.response(req, name, res);
    },
    deleteName: async (req: any, res: any) => {
        // format input data
        const id: number = Input.delete(req);

        // delete name by id
        const Name: { acknowledged: boolean; deletedCount: number } = await NameModel.deleteOne({
            _id: id,
        });

        // format output data
        return Output.response(req, Name.deletedCount, res);
    },
};

export default mutationName;
