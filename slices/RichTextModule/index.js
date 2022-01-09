import React from 'react'
import { RichText } from 'prismic-reactjs'

const RichTextModule = ({ slice }) => (
  <section>
    <div className="title">
      { slice?.items?.map((item, i) => <RichText render={item.richtext} />) }
    </div>
    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: #8592e0;
        }
    `}</style>
  </section>
)

export default RichTextModule