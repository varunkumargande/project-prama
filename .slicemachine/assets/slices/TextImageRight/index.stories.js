import MyComponent from '../../../../slices/TextImageRight';

export default {
  title: 'slices/TextImageRight'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"text_image_right","items":[{"richtext":[{"type":"paragraph","text":"Ex est in quis enim id occaecat ipsum labore dolor culpa commodo nulla.","spans":[]}]},{"richtext":[{"type":"paragraph","text":"Exercitation minim culpa dolor ipsum ullamco laborum mollit aliquip ipsum irure irure consectetur est do sunt.","spans":[]}]},{"richtext":[{"type":"paragraph","text":"Et deserunt cupidatat dolor excepteur ex exercitation sit culpa quis incididunt ut minim labore. Adipisicing nulla labore fugiat dolor anim nostrud minim eu aliquip ea in deserunt.","spans":[]}]}],"primary":{"textField":[{"type":"heading1","text":"Generate dynamic methodologies","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _TextImageLeft = () => <MyComponent slice={{"variation":"textImageLeft","name":"TextImageLeft","slice_type":"text_image_right","items":[],"primary":{"textField":[{"type":"heading1","text":"Mesh enterprise vortals","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=900&h=500&fit=crop"}},"id":"_TextImageLeft"}} />
_TextImageLeft.storyName = 'TextImageLeft'

export const _TitleImage = () => <MyComponent slice={{"variation":"titleImage","name":"TitleImage","slice_type":"text_image_right","items":[],"primary":{"title":[{"type":"paragraph","text":"Mollit quis nostrud proident amet culpa adipisicing ex laborum exercitation magna consequat non qui minim. Proident deserunt eiusmod ipsum. Dolor veniam qui qui enim consequat esse ex do in minim veniam magna ipsum.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&h=500&fit=crop"}},"id":"_TitleImage"}} />
_TitleImage.storyName = 'TitleImage'
