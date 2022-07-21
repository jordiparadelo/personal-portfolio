export default {
    name:'workExperience',
    title:'Work Experience',
    type:'document',
    fields:[
           {name:'name',
               title:'name',
               type:'string'
            },
            {
                name:'company',
                title:'Company',
                type:'string'
            },
            {
                name:'companyUrl',
                title:'Company Url',
                type:'string'
            },
            {
                name:'year',
                title:'Year',
                type:'string'
            },
            {
                name:'actualWork',
                title:'Actual work',
                type:"boolean"
            },
            {
                name: "order",
                title: "Order",
                type: "number",
                hidden: true,
              },
    ]
}