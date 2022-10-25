import { NameModel, IName } from "../../model";
import { Input, Output } from "req-res-formatter";
import config from "../../config/config";

const queryName = {
    names: async (req: any, res: any) => {
        let page: number, offset: number;
        let names: IName[];

        // format input data
        [page, offset] = Input.list(req);

        // get list name
        if (page) {
            offset = offset ? offset : config.offset;
            names = await NameModel.find()
                .skip(Math.abs((page - 1) * offset))
                .limit(offset);
        } else {
            names = await NameModel.find();
        }

        // format output data
        return Output.response(req, names, res);
    },

    name: async (req: any, res: any) => {
        // format input data
        const id: number = Input.detail(req);

        // get name detail
        const name = await NameModel.findById(id);

        // format output data
        return Output.response(req, name, res);
    },
};

export default queryName;
