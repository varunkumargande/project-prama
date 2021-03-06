import MyComponent from '../../../../slices/TextImageRight';

export default {
  title: 'slices/TextImageRight'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"text_image_right","items":[{"richtext":[{"type":"paragraph","text":"Eiusmod veniam laboris nostrud culpa laboris eiusmod et occaecat mollit.","spans":[]}]},{"richtext":[{"type":"paragraph","text":"Aute anim fugiat aliquip. Cillum et enim non proident ex fugiat elit Lorem velit tempor veniam pariatur ullamco commodo. Non eiusmod ullamco dolore est mollit in nisi officia incididunt qui deserunt elit amet id consectetur.","spans":[]}]},{"richtext":[{"type":"paragraph","text":"Veniam consequat laboris proident aliquip ad nulla mollit.","spans":[]}]},{"richtext":[{"type":"paragraph","text":"Ea laboris elit non sit eu aute quis enim mollit est consectetur. Exercitation sit irure aliqua cillum.","spans":[]}]},{"richtext":[{"type":"paragraph","text":"Est mollit culpa adipisicing eu esse pariatur aute consectetur deserunt minim. Aliquip elit sit ut aliquip laborum nulla do nisi consequat sunt cillum ullamco aliqua eiusmod elit.","spans":[]}]}],"primary":{"textField":[{"type":"heading1","text":"Reinvent plug-and-play content","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _TextImageLeft = () => <MyComponent slice={{"variation":"textImageLeft","name":"TextImageLeft","slice_type":"text_image_right","items":[],"primary":{"textField":[{"type":"heading1","text":"Recontextualize granular users","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=900&h=500&fit=crop"}},"id":"_TextImageLeft"}} />
_TextImageLeft.storyName = 'TextImageLeft'

export const _TitleImage = () => <MyComponent slice={{"variation":"titleImage","name":"TitleImage","slice_type":"text_image_right","items":[],"primary":{"title":[{"type":"paragraph","text":"Occaecat cupidatat esse pariatur id amet quis excepteur. In laborum commodo ullamco minim nisi. Officia est deserunt veniam.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=900&h=500&fit=crop"}},"id":"_TitleImage"}} />
_TitleImage.storyName = 'TitleImage'
