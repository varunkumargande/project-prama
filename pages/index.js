import React from 'react'

import Link from 'next/link'

import { Client } from '../utils/prismicHelpers'
import SliceZone from '../components/slices/SliceZone'

const HomePage = ({ doc, menu }) => {
  if (doc && doc.data) {
    return (
      <div className='homepage'>
        <ul>
          <li>
            <Link href="/contact">
              <a>Contact Us</a>
            </Link>
          </li>
          <li>
            <Link href="/privacy-policy">
              <a>Privacy Policy</a>
            </Link>
          </li>
        </ul>
        <SliceZone sliceZone={doc.data.slices} />
      </div>
    )
  }

  
  return null
}

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const client = Client()

  const doc = await client.getSingle('home-page', ref ? { ref } : null) || {}

  return {
    props: {
      doc,
      preview
    }
  }
}

export default HomePage