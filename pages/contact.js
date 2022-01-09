import React from 'react'

import Link from 'next/link'

import { Client } from '../utils/prismicHelpers'
import SliceZone from '../components/slices/SliceZone'

const Contact = ({ doc, menu }) => {
  if (doc && doc.data) {
    return (
      <div className='contact text-left'>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/privacy-policy">
              <a>Privacy Policy</a>
            </Link>
          </li>
        </ul>
        <SliceZone sliceZone={doc.data.body} />
      </div>
    )
  }

  
  return null
}

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const client = Client()

  const doc = await client.getSingle('contact', ref ? { ref } : null) || {}

  return {
    props: {
      doc,
      preview
    }
  }
}

export default Contact