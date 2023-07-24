export default {
    name: 'pet',
    type: 'document',
      title: 'octotodo',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },{
        name: 'description',
        type:'array',
        title: 'Description',
        
        of:[
            {
                type:'block',
            }
        ]
      }
    ]
  }
  
  