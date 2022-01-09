import React from 'react'
import SliceZone from "next-slicezone";

import { Client } from '../utils/prismicHelpers'

const Home = ({ doc, menu }) => {
  if (doc && doc.data) {
    return (
      <div className='home'>
      hello
        {/*<SliceZone sliceZone={doc.data.page_content} />*/}
      </div>
    )
  }

  // Call the standard error page if the document was not found
  return null
}

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const client = Client()

  const doc = await client.getSingle('home', ref ? { ref } : null) || {}

  return {
    props: {
      doc,
      preview
    }
  }
}

export default Home