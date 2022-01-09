import React from 'react'
import TextImageRight from '../../slices/TextImageRight/index.js'
import RichTextModule from '../../slices/RichTextModule/index.js'
import ContactForm from '../../slices/ContactForm/index.js'

const SliceZone = ({ sliceZone }) => (
  <div className="container">
    {sliceZone.map((slice, index) => {
      switch (slice.slice_type) {
        case ('text_image_right'):
          return <TextImageRight slice={slice} key={`slice-${index}`} />
        case ('rich_text_module'):
          return <RichTextModule slice={slice} key={`slice-${index}`} />
        case ('contact_form'):
          return <ContactForm slice={slice} key={`slice-${index}`} />
        default:
          return null
      }
    })}
  </div>
)

export default SliceZone