# Template Module Nodejs

Template modules Typescript, Nodejs and MongoDB(for GraphQL and RESTFul). The modules generate from templates which was used in [bapi-nodejs](https://gitlab.com/beetsoft/bs_base_contruction/bapi-nodejs)

## Use this Template
First, you can `Use this template` for new project: [Use this template](https://github.com/tienhm7/template-nodejs-modules-mongodb/generate)

Second, clone your project to your to path in your machine

Third, your edit file `package.json` in root folder of project

Finally, you replace in src directory with camelCase:
Example: Create module User
``` 
Name -> User
name -> user
```

Rename file: 
``` 
src/resolver/mutation/name.ts to -> src/resolver/mutation/user.ts

src/resolver/query/name.ts -> src/resolver/query/user.ts
```
### Note: 
- Update corresponding Interface, Schema in src/model/index.ts
- Update corresponding Mutation, Query, Type for Schema in src/schema

## Contact & Support

If any question & request, please contact following information

| Name            | Email                  | Skype                | Facebook       |
|-----------------|------------------------|----------------------|----------------|
| Hoang Manh Tien | tienhm@beetsoft.com.vn | conthuyendocmoc_a888 | @tiencntt2hust |

From Vietnam with Love :)