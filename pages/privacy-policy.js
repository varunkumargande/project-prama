import React from 'react'

import Link from 'next/link'

import { Client } from '../utils/prismicHelpers'
import SliceZone from '../components/slices/sliceZone'

const PrivacyPolicy = ({ doc, menu }) => {
  if (doc && doc.data) {
    return (
      <div className='privacypolicy text-left'>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact Us</a>
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

  const doc = await client.getSingle('privacy_policy', ref ? { ref } : null) || {}

  return {
    props: {
      doc,
      preview
    }
  }
}

export default PrivacyPolicy